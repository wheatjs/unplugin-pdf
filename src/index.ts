import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Browser } from 'puppeteer'
import { launch } from 'puppeteer'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options) => {
  let browser: Browser | undefined
  let address: string | undefined

  return {
    name: 'unplugin-pdf',
    enforce: 'post',
    vite: {
      configureServer(server) {
        const { httpServer } = server

        httpServer!.on('listening', () => {
          const _address = httpServer!.address()

          if (typeof _address !== 'string')
            address = `http://${_address!.address}:${_address!.port}`
        })

        server.middlewares.use(async (req, res, next) => {
          if ((req.url && !req.url.endsWith('.pdf')) || !address)
            return next()

          if (!browser)
            browser = await launch({ headless: 'new' })

          const page = await browser.newPage()
          await page.goto(`${address}${req.url!.replace('.pdf', '')}`, { waitUntil: 'networkidle2' })

          // TODO: Add support for custom pdf options.
          const pdf = await page.pdf({
            format: 'A4',
            displayHeaderFooter: false,
            printBackground: true,
            margin: {
              top: '0.4in',
              bottom: '0.4in',
              left: '0.4in',
              right: '0.4in',
            },
          })
          await page.close()

          res.setHeader('Content-Type', 'application/pdf')
          res.setHeader('Content-Disposition', 'inline')
          res.end(pdf)
        })
      },
    },
    buildEnd() {
      // TODO: On build generate pdfs from user routes.
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
