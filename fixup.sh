#!/usr/bin/env bash

esbuild --minify \
  --bundle dist/cjs/index-cjs.js \
  --outfile=dist/cjs/index.min.js \
  --format=cjs

esbuild --minify \
  --bundle dist/mjs/index.js \
  --outfile=dist/mjs/index.min.js \
  --format=esm

cat >dist/cjs/package.json <<!EOF
{
  "type": "commonjs"
}
!EOF

cat >dist/mjs/package.json <<!EOF
{
  "type": "module"
}
!EOF
