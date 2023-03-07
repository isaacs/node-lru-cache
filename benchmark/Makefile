all: package.json index.js worker.js
	rm -rf results.txt results
	npm run benchmark | tee results.md

package.json: make-deps.sh
	bash make-deps.sh
