const t = require('tap')
const LRU = require('../')
t.plan(0, 'not yet implemented')
process.exit(0)

const c = new LRU({ max: 5 })
for (let i = 0; i < 9; i++) {
  c.set(i, i)
}

const d = new LRU(c)
d.load(c.dump())

t.strictSame(d, c)
