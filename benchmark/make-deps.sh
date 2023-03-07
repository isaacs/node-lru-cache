#!/usr/bin/env bash

# get the latest patch in each lru-cache 7.x and up,
# plus mnemonist, hashlru, and lru-fast

nvs=($(
  npm view 'lru-cache@>=7' name | awk -F. '{print $1 "." $2}' | sort -r -V | uniq
)
'mnemonist@0.39'
'hashlru@2'
'lru-fast@0.2')

echo "lru-cache_CURRENT" > impls.txt

deps=""
install=()
for dep in "${nvs[@]}"; do
  name=${dep/@/_}
  echo $name >> impls.txt
  deps="${deps}"'    "'"$name"'": "'"npm:$dep"$'",\n'
done

cat >package.json <<PJ
{
  "//": "Note: this file is programmatically generated, do not edit",
  "name": "bench-lru",
  "author": {
    "email": "dominic.tarr@gmail.com",
    "name": "Dominic Tarr",
    "url": "https://dominictarr.com"
  },
  "dependencies": {
    "lru-cache_CURRENT": "file:../",
${deps}    "tiny-worker": "^2.1.2",
    "ora": "^2.0.0",
    "keysort": "^1.0.2",
    "markdown-tables": "1.1",
    "retsu": "^3.0.1",
    "precise": "^1.1.0"
  },
  "scripts": {
    "benchmark": "NODE_ENV=production node index.js"
  },
  "license": "MIT"
}
PJ
rm package-lock.json
rm -rf node_modules
npm install "${install[@]}"
