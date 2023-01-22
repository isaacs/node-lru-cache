#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises'
const cjs = await readFile(
  new URL('../index.js', import.meta.url),
  'utf8'
)
const esm = cjs.replace(/module.exports\s*=\s*/, 'export default ')
await writeFile(new URL('../index.mjs', import.meta.url), esm, 'utf8')
