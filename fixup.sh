#!/usr/bin/env bash

esbuild --minify \
  --sourcemap \
  --bundle dist/commonjs/index.js \
  --outfile=dist/commonjs/index.min.js \
  --format=cjs

esbuild --minify \
  --sourcemap \
  --bundle dist/esm/index.js \
  --outfile=dist/esm/index.min.js \
  --format=esm
