const t = require('tap')
const LRU = require('../')

const c = new LRU({ max: 5 })

for (let i = 0; i < 9; i++) {
  c.set(i, { value: i })
}

t.equal(c.find(o => o.value === 4), c.get(4))
