#!/usr/bin/env bash
set -x
set -e
mkdir -p docs/benchmark/results
cp -r benchmark/results/* docs/benchmark/results/
echo '<html><title>benchmark results overview</title>' > docs/benchmark/index.html
echo '<body>' >> docs/benchmark/index.html
echo '<p><a href="results/index.html">raw CSV results</a></p>' >> docs/benchmark/index.html
marked < benchmark/results.md >> docs/benchmark/index.html
echo '<html>' > docs/benchmark/results/index.html
echo '<title>benchmark results</title>' >> docs/benchmark/results/index.html
echo '<body><ul>' >> docs/benchmark/results/index.html
ls docs/benchmark/results | while read p; do
  f=$(basename "$p")
  echo '<li><a href="'$f'">'$f'</a></li>' >> docs/benchmark/results/index.html
done
echo '</ul></body></html>' >> docs/benchmark/results/index.html
