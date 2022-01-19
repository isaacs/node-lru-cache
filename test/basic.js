const t = require('tap')
const LRU = require('../')

t.test('basic operation', t => {
  const c = new LRU({ max: 10 })
  for (let i = 0; i < 5; i++) {
    c.set(i, i)
  }
  for (let i = 0; i < 5; i++) {
    t.equal(c.get(i), i)
  }
  t.strictSame([...c.old.entries()], [])
  t.equal(c.current.size, 5)
  for (let i = 5; i < 10; i++) {
    c.set(i, i)
  }
  t.strictSame([...c.current.entries()], [])
  t.equal(c.old.size, 10)
  for (let i = 0; i < 5; i++) {
    c.get(i)
  }
  t.strictSame(c.current.size, 5)
  t.equal(c.old.size, 10)
  for (let i = 5; i < 10; i++) {
    c.get(i)
  }
  // got pruned and replaced
  t.equal(c.current.size, 0)
  t.equal(c.old.size, 10)
  for (let i = 10; i < 15; i++) {
    c.set(i, i)
  }
  t.equal(c.current.size, 5)
  t.equal(c.old.size, 10)
  for (let i = 15; i < 20; i++) {
    c.set(i, i)
  }
  // got pruned and replaced
  t.equal(c.current.size, 0)
  t.equal(c.old.size, 10)

  for (let i = 0; i < 10; i++) {
    t.equal(c.get(i), undefined)
  }

  for (let i = 0; i < 9; i++) {
    c.set(i, i)
  }
  t.equal(c.size, 19)
  t.equal(c.old.size, 10)
  t.equal(c.current.size, 9)
  c.delete(19)
  t.equal(c.size, 18)
  t.equal(c.old.size, 9)
  t.equal(c.current.size, 9)
  c.set(10, 10)
  t.equal(c.size, 10)
  t.equal(c.old.size, 10)
  t.equal(c.current.size, 0)

  // reset
  c.reset()
  t.equal(c.size, 0)
  for (let i = 0; i < 10; i++) {
    c.set(i, i)
  }
  t.equal(c.current.size, 0)
  t.equal(c.old.size, 10)
  t.equal(c.has(0), true)
  t.equal(c.current.size, 0)
  t.equal(c.old.size, 10)
  t.equal(c.has(0, true), true)
  t.equal(c.current.size, 1)
  t.equal(c.old.size, 10)
  t.equal(c.has(0, true), true)
  t.equal(c.current.size, 1)
  t.equal(c.old.size, 10)
  t.equal(c.has(10), false)
  t.equal(c.has(10, true), false)
  t.equal(c.current.size, 1)
  t.equal(c.old.size, 10)
  c.set(true, 'true')
  t.equal(c.has(true), true)
  t.equal(c.get(true), 'true')
  c.delete(true)
  t.equal(c.has(true), false)

  t.end()
})

t.throws(() => new LRU())
t.throws(() => new LRU(123))
t.throws(() => new LRU(null))
t.throws(() => new LRU({ max: -123 }))
t.throws(() => new LRU({ max: 0 }))
t.throws(() => new LRU({ max: 2.5 }))
