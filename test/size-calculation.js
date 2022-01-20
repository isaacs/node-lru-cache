const t = require('tap')
const LRU = require('../')

t.test('store strings, size = length', t => {
  const c = new LRU({
    max: 100,
    sizeCalculation: n => n.length,
  })
  const s = 'x'.repeat(10)
  for (let i = 0; i < 5; i++) {
    c.set(i, s)
  }
  t.equal(c.size, 50)
  // the big item goes in, but triggers a prune
  // we don't preemptively prune until we *cross* the max
  c.set('big', 'x'.repeat(100))
  t.equal(c.size, 150)
  t.equal(c.old.size, 6)
  t.equal(c.oldSize, 150)
  t.equal(c.current.size, 0)
  t.equal(c.currentSize, 0)
  // override the size on set
  c.set('big', 'y'.repeat(100), { sizeCalculation: () => 10 })
  t.equal(c.size, 160)
  t.equal(c.itemCount, 7)
  t.equal(c.old.size, 6)
  t.equal(c.oldSize, 150)
  t.equal(c.current.size, 1)
  t.equal(c.currentSize, 10)
  c.delete('big')
  t.equal(c.size, 50)
  t.equal(c.old.size, 5)
  t.equal(c.oldSize, 50)
  t.equal(c.current.size, 0)
  t.equal(c.currentSize, 0)

  c.set('repeated', 'i'.repeat(10))
  c.set('repeated', 'j'.repeat(10))
  c.set('repeated', 'i'.repeat(10))
  c.set('repeated', 'j'.repeat(10))
  c.set('repeated', 'i'.repeat(10))
  c.set('repeated', 'j'.repeat(10))
  c.set('repeated', 'i'.repeat(10))
  c.set('repeated', 'j'.repeat(10))
  t.equal(c.size, 60)
  t.equal(c.old.size, 5)
  t.equal(c.oldSize, 50)
  t.equal(c.current.size, 1)
  t.equal(c.currentSize, 10)
  t.equal(c.get('repeated'), 'j'.repeat(10))

  t.end()
})

t.test('bad size calculation fn, use 1 instead', t => {
  const c = new LRU({ max: 5, sizeCalculation: () => 'asdf' })
  c.set(1, '1'.repeat(100))
  t.equal(c.size, 1)
  c.set(2, '2'.repeat(100), { sizeCalculation: () => 'foobar' })
  t.equal(c.size, 2)
  t.end()
})
