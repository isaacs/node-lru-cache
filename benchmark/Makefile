all: package.json index.js worker.js
	rm -rf results.txt results
	npm run benchmark | tee results.md

impls.txt: fetch-impls.sh
	bash fetch-impls.sh

profile: worker.js
	bash profile.sh

package.json: make-deps.sh impls.txt
	bash make-deps.sh
