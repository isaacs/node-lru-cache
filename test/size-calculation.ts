import t from 'tap'
import LRU from '../'

const checkSize = (c:LRU<any,any>) => {
  const sizes = (c as unknown as { sizes: number[] }).sizes
  const {calculatedSize, maxSize} = c
  const sum = [...sizes].reduce((a, b) => a + b, 0)
  if (sum !== calculatedSize) {
    console.error({sum, calculatedSize, sizes})
    throw new Error('calculatedSize does not equal sum of sizes')
  }
  if (calculatedSize > maxSize) {
    throw new Error('max size exceeded')
  }
}

t.test('store strings, size = length', t => {
  const c = new LRU<any, string>({
    max: 100,
    maxSize: 100,
    sizeCalculation: n => n.length,
  })

  checkSize(c)
  c.set(5, 'x'.repeat(5))
  checkSize(c)
  c.set(10, 'x'.repeat(10))
  checkSize(c)
  c.set(20, 'x'.repeat(20))
  checkSize(c)
  t.equal(c.calculatedSize, 35)
  c.delete(20)
  checkSize(c)
  t.equal(c.calculatedSize, 15)
  c.delete(5)
  checkSize(c)
  t.equal(c.calculatedSize, 10)
  c.clear()
  checkSize(c)
  t.equal(c.calculatedSize, 0)

  const s = 'x'.repeat(10)
  for (let i = 0; i < 5; i++) {
    c.set(i, s)
    checkSize(c)
  }
  t.equal(c.calculatedSize, 50)

  // the big item goes in, but triggers a prune
  // we don't preemptively prune until we *cross* the max
  c.set('big', 'x'.repeat(100))
  checkSize(c)
  t.equal(c.calculatedSize, 100)
  // override the size on set
  c.set('big', 'y'.repeat(100), { sizeCalculation: () => 10 })
  checkSize(c)
  t.equal(c.size, 1)
  checkSize(c)
  t.equal(c.calculatedSize, 10)
  checkSize(c)
  c.delete('big')
  checkSize(c)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)

  c.set('repeated', 'i'.repeat(10))
  checkSize(c)
  c.set('repeated', 'j'.repeat(10))
  checkSize(c)
  c.set('repeated', 'i'.repeat(10))
  checkSize(c)
  c.set('repeated', 'j'.repeat(10))
  checkSize(c)
  c.set('repeated', 'i'.repeat(10))
  checkSize(c)
  c.set('repeated', 'j'.repeat(10))
  checkSize(c)
  c.set('repeated', 'i'.repeat(10))
  checkSize(c)
  c.set('repeated', 'j'.repeat(10))
  checkSize(c)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 10)
  t.equal(c.get('repeated'), 'j'.repeat(10))
  t.matchSnapshot(c.dump(), 'dump')

  t.end()
})

t.test('bad size calculation fn throws on set()', t => {
  const c = new LRU({
    max: 5,
    maxSize: 5,
    // @ts-expect-error
    sizeCalculation: () => {
      return 'asdf'
    },
  })
  t.throws(
    () => c.set(1, '1'.repeat(100)),
    new TypeError(
      'sizeCalculation return invalid (expect positive integer)'
    )
  )
  t.throws(() => {
    // @ts-expect-error
    c.set(1, '1', { size: 'asdf', sizeCalculation: null })
  }, new TypeError('invalid size value (must be positive integer)'))
  t.throws(() => {
    // @ts-expect-error
    c.set(1, '1', { sizeCalculation: 'asdf' })
  }, new TypeError('sizeCalculation must be a function'))
  t.end()
})

t.test('delete while empty, or missing key, is no-op', t => {
  const c = new LRU({ max: 5, maxSize: 10, sizeCalculation: () => 2 })
  checkSize(c)
  c.set(1, 1)
  checkSize(c)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 2)
  c.clear()
  checkSize(c)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
  c.delete(1)
  checkSize(c)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)

  c.set(1, 1)
  checkSize(c)
  c.set(1, 1)
  checkSize(c)
  c.set(1, 1)
  checkSize(c)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 2)
  c.delete(99)
  checkSize(c)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 2)
  c.delete(1)
  checkSize(c)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
  c.delete(1)
  checkSize(c)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
  t.end()
})

t.test('large item falls out of cache, sizes are kept correct', t => {
  const c = new LRU<number, number>({
    maxSize: 10,
    sizeCalculation: () => 100,
  })
  const sizes:number[] = (c as unknown as { sizes: number[] }).sizes

  checkSize(c)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
  t.same(sizes, [])

  c.set(2, 2, { size: 2 })
  checkSize(c)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 2)
  t.same(sizes, [2])

  c.delete(2)
  checkSize(c)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
  t.same(sizes, [0])

  c.set(1, 1)
  checkSize(c)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
  t.same(sizes, [0])

  c.set(3, 3, { size: 3 })
  checkSize(c)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 3)
  t.same(sizes, [3])

  c.set(4, 4)
  checkSize(c)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 3)
  t.same(sizes, [3])

  t.end()
})
