#!/usr/bin/env bash

mkdir -p profiles
rm -f isolate-*.log profile.txt
N=1000000 node --prof worker.js
d=profiles/$(date +%s)
node --prof-process isolate-*.log > $d
ln ${PWD}/$d profile.txt
cat profile.txt
