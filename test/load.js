const t = require('tap')
const LRU = require('../')

const c = new LRU({ max: 5 })
for (let i = 0; i < 9; i++) {
  c.set(i, i)
}

const d = new LRU(c)
d.load(c.dump())

t.strictSame(d, c)
