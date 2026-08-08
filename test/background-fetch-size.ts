import t from 'tap'
import { LRUCache } from '../dist/esm/node/index.js'

const clock = t.clock
clock.advance(1)
clock.enter()

const invalidBackgroundFetchSizeError = {
  name: 'TypeError',
  message: 'backgroundFetchSize must be a nonnegative integer',
}

t.test('background fetch size tests', async t => {
  const res: Record<number, (n: number) => void> = {}
  const c = new LRUCache<number, number>({
    maxSize: 10,
    sizeCalculation: () => 5,
    allowStale: true,
    ttl: 10,
    // never returns on purpose
    fetchMethod: k =>
      new Promise<number>(r => {
        res[k] = r
      }),
  })
  t.equal(c.calculatedSize, 0)
  const p1 = c.fetch(1).catch(er => er)
  t.equal(c.calculatedSize, 1)
  c.set(1, 1)
  t.match(await p1, new Error('replaced'))
  t.equal(c.calculatedSize, 5)
  clock.advance(100)
  t.equal(c.getRemainingTTL(1), -90)
  // verify correct behavior of a fetch that shadows a stale value
  const p = c.fetch(1)
  t.equal(c.calculatedSize, 5)
  const p2 = c.fetch(2)
  t.equal(c.calculatedSize, 6)
  const p3 = c.fetch(3)
  t.equal(c.calculatedSize, 7)
  res[1]?.(1)
  await p
  // no change, that one had a stale value
  t.equal(c.calculatedSize, 7)
  res[2]?.(2)
  await p2
  t.equal(c.calculatedSize, 10)
  await t.rejects(p3, new Error('evicted'))
})

t.test('backgroundFetchSize must be a nonnegative integer', t => {
  const hostile = {
    [Symbol.toPrimitive]() {
      throw new Error('must not coerce backgroundFetchSize')
    },
  }
  const invalid = [
    ['negative', -1],
    ['fractional', 1.5],
    ['NaN', Number.NaN],
    ['infinity', Number.POSITIVE_INFINITY],
    ['string', '2'],
    ['symbol', Symbol('2')],
    ['hostile object', hostile],
  ] as const

  for (const [label, backgroundFetchSize] of invalid) {
    t.throws(
      () =>
        new LRUCache({
          max: 1,
          backgroundFetchSize: backgroundFetchSize as unknown as number,
        }),
      invalidBackgroundFetchSizeError,
      label,
    )
  }

  t.doesNotThrow(() => new LRUCache({ max: 1, backgroundFetchSize: 0 }))
  t.doesNotThrow(() => new LRUCache({ max: 1, backgroundFetchSize: 1 }))
  t.end()
})

t.test('mutated size is validated before fetch dispatch', async t => {
  let fetchCalls = 0
  const c = new LRUCache<number, number>({
    maxSize: 10,
    sizeCalculation: () => 5,
    fetchMethod: async key => {
      fetchCalls++
      return key
    },
  })

  c.backgroundFetchSize = Symbol('2') as unknown as number
  await t.rejects(c.fetch(1), invalidBackgroundFetchSizeError)
  t.equal(fetchCalls, 0)
  t.equal(c.size, 0)
  t.equal(c.calculatedSize, 0)
})

t.test('fetch snapshots size before callback mutation', async t => {
  const deferred = new Map<number, PromiseWithResolvers<number>>()
  let fetchCalls = 0
  let c: LRUCache<number, number>
  c = new LRUCache<number, number>({
    maxSize: 20,
    sizeCalculation: () => 5,
    backgroundFetchSize: 2,
    fetchMethod: async key => {
      fetchCalls++
      if (key === 1) {
        c.backgroundFetchSize = 4
      }
      const result = Promise.withResolvers<number>()
      deferred.set(key, result)
      return result.promise
    },
  })

  const first = c.fetch(1)
  const firstAgain = c.fetch(1)
  t.equal(fetchCalls, 1)
  t.equal(c.calculatedSize, 2)

  const second = c.fetch(2)
  t.equal(fetchCalls, 2)
  t.equal(c.calculatedSize, 6)

  deferred.get(1)?.resolve(1)
  deferred.get(2)?.resolve(2)
  t.same(await Promise.all([first, firstAgain, second]), [1, 1, 2])
  t.equal(c.calculatedSize, 10)
})

t.test('mutated size is ignored without size tracking', async t => {
  let fetchCalls = 0
  const c = new LRUCache<number, number>({
    max: 1,
    fetchMethod: async key => {
      fetchCalls++
      return key
    },
  })

  c.backgroundFetchSize = Symbol('2') as unknown as number
  t.equal(await c.fetch(1), 1)
  t.equal(fetchCalls, 1)
  t.equal(c.size, 1)
})

t.test('mutated size is ignored for stale refresh', async t => {
  const deferred = Promise.withResolvers<number>()
  let fetchCalls = 0
  const c = new LRUCache<number, number>({
    maxSize: 10,
    sizeCalculation: () => 5,
    ttl: 10,
    backgroundFetchSize: 2,
    fetchMethod: async () => {
      fetchCalls++
      return deferred.promise
    },
  })

  c.set(1, 1)
  clock.advance(100)
  c.backgroundFetchSize = Symbol('2') as unknown as number
  const refresh = c.fetch(1)

  t.equal(fetchCalls, 1)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 5)

  deferred.resolve(2)
  t.equal(await refresh, 2)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 5)
})

t.test('backgroundFetchSize 0 retains in-flight coalescing', async t => {
  const deferred = Promise.withResolvers<number>()
  let fetchCalls = 0
  const c = new LRUCache<number, number>({
    maxSize: 10,
    sizeCalculation: () => 5,
    backgroundFetchSize: 0,
    fetchMethod: async () => {
      fetchCalls++
      return deferred.promise
    },
  })

  const first = c.fetch(1)
  const second = c.fetch(1)
  t.equal(fetchCalls, 1)
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 0)

  deferred.resolve(1)
  t.same(await Promise.all([first, second]), [1, 1])
  t.equal(c.size, 1)
  t.equal(c.calculatedSize, 5)
})
