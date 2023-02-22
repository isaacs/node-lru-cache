#!/usr/bin/env node

const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const cjs = readFileSync(resolve(__dirname, '../index.js'), 'utf8')
const esm = cjs.replace(/module.exports\s*=\s*/, 'export default ')
writeFileSync(resolve(__dirname, '../index.mjs'), esm, 'utf8')
