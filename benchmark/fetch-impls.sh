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
for dep in "${nvs[@]}"; do
  name=${dep/@/_}
  echo $name >> impls.txt
done
