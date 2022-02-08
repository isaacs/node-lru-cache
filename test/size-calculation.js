const t = require('tap')

const LRU = require('../')

t.test('store strings, size = length', t => {
  const c = new LRU({
    max: 100,
    maxSize: 100,
    sizeCalculation: n => n.length,
  })
  const s = 'x'.repeat(10)
  for (let i = 0; i < 5; i++) {
    c.set(i, s)
  }
  t.equal(c.calculatedSize, 50)

  // the big item goes in, but triggers a prune
  // we don't preemptively prune until we *cross* the max
  c.set('big', 'x'.repeat(100))
  t.equal(c.calculatedSize, 100)
  // override the size on set
  c.set('big', 'y'.repeat(100), { sizeCalculation: () => 10 })
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 10)
  c.delete('big')
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)

  c.set('repeated', 'i'.repeat(10))
  c.set('repeated', 'j'.repeat(10))
  c.set('repeated', 'i'.repeat(10))
  c.set('repeated', 'j'.repeat(10))
  c.set('repeated', 'i'.repeat(10))
  c.set('repeated', 'j'.repeat(10))
  c.set('repeated', 'i'.repeat(10))
  c.set('repeated', 'j'.repeat(10))
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 10)
  t.equal(c.get('repeated'), 'j'.repeat(10))
  t.matchSnapshot(c.dump(), 'dump')

  t.end()
})

t.test('bad size calculation fn returns 0', t => {
  const c = new LRU({ max: 5, maxSize: 5, sizeCalculation: () => 'asdf' })
  c.set(1, '1'.repeat(100))
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 0)
  c.set(2, '2'.repeat(100), { sizeCalculation: () => 'foobar' })
  t.equal(c.size, 2)
  t.equal(c.calculatedSize, 0)
  t.end()
})

t.test('delete while empty, or missing key, is no-op', t => {
  const c = new LRU({ max: 5, maxSize: 10, sizeCalculation: () => 2 })
  c.set(1, 1)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 2)
  c.clear()
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
  c.delete(1)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)

  c.set(1, 1)
  c.set(1, 1)
  c.set(1, 1)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 2)
  c.delete(99)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 2)
  c.delete(1)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
  c.delete(1)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
  t.end()
})
