#!/usr/bin/env bash

esbuild --minify \
  --sourcemap \
  --platform=node \
  --bundle dist/commonjs/node/index.js \
  --outfile=dist/commonjs/node/index.min.js \
  --format=cjs

esbuild --minify \
  --sourcemap \
  --bundle dist/commonjs/browser/index.js \
  --outfile=dist/commonjs/browser/index.min.js \
  --format=cjs

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

esbuild --minify \
  --sourcemap \
  --bundle dist/esm/browser/index.js \
  --outfile=dist/esm/browser/index.min.js \
  --format=esm

esbuild --minify \
  --sourcemap \
  --platform=node \
  --bundle dist/esm/node/index.js \
  --outfile=dist/esm/node/index.min.js \
  --format=esm
