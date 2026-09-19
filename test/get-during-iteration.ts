import t from 'tap'
import { LRUCache } from '../src/index.js'

// get() during forEach/keys() moves the entry to MRU. The walker follows
// the re-linked list and revisits entries forever (c,b,c,b...), eventually
// crashing with RangeError: Invalid array length.
//
// Expected: each key visited exactly once, matching Map iteration semantics.

const c = new LRUCache<number, number>({ max: 5 })
for (let i = 0; i < 5; i++) c.set(i, i)

const visited: number[] = []
t.doesNotThrow(() => {
	for (const k of c.keys()) {
		visited.push(k)
		c.get(k)
		if (visited.length > 10) throw new Error('infinite loop')
	}
}, 'iteration terminates')

t.same(visited.sort((a, b) => a - b), [0, 1, 2, 3, 4])
t.end()
