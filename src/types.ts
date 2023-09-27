export interface Options {
  paths?: string[]
  buildOnly?: boolean
  pdfOptions?: {
    format?: 'A4' | 'A3' | 'Letter' | 'Legal'
    displayHeaderFooter?: boolean
    printBackground?: boolean
    margin?: {
      top?: string
      bottom?: string
      left?: string
      right?: string
    }
  }
}
