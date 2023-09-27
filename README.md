# unplugin-pdf

<!-- [![NPM version](https://img.shields.io/npm/v/unplugin-starter?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-starter) -->

> This plugin has not been released yet and is still under development.

Automatically generate PDF files from your web application.

## Installation

```bash
npm i -D unplugin-pdf
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Pdf from 'unplugin-pdf/vite'

export default defineConfig({
  plugins: [Pdf()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Pdf from 'unplugin-pdf/rollup'

export default {
  plugins: [Pdf()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [require('unplugin-pdf/esbuild')()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-pdf/webpack')()],
}
```

<br></details>

## License

[MIT](./LICENSE) License © 2023-PRESENT [Jacob Clevenger](https://github.com/wheatjs)
