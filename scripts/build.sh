#!/usr/bin/env bash

esbuild --minify \
  --sourcemap \
  --platform=node \
  --bundle dist/commonjs/index.js \
  --outfile=dist/commonjs/index.min.js \
  --format=cjs

esbuild --minify \
  --sourcemap \
  --bundle dist/esm/index.js \
  --outfile=dist/esm/index.min.js \
  --format=esm

esbuild --minify \
  --sourcemap \
  --platform=node \
  --bundle dist/esm/node/index.js \
  --outfile=dist/esm/node/index.min.js \
  --format=esm
