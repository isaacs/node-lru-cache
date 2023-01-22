#!/usr/bin/env node

/**
 * This script manually transpiles CommonJS source into an ESM script for distribution.
 * Usually we'd use a compiler like Babel or esbuild, but this library uses minimal CommonJS features (only a single default export), and it can be easily and reliably translated to the ESM equivalent via a simple regexp.
 */

import { readFile, writeFile } from 'node:fs/promises'
import assert from 'node:assert'

const cjs = await readFile(new URL('../index.js', import.meta.url), 'utf8')
const esm = cjs.replace(/module.exports\s*=\s*/, 'export default ')
await writeFile(new URL('../index.mjs', import.meta.url), esm, 'utf8')

/**
 * As a test, import the generated file to ensure it's a valid ES Module.
 */
const { default: LRUCache } = await import('../index.mjs') // dynamic imports use this destructuring syntax to get default exports; this is normal and expected.
const cache = new LRUCache({ max: 10 })
cache.set('foo', 'bar')
assert(cache.get('foo') === 'bar')
