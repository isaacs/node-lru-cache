import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/node/index.js'

const cache = new LRU<number, number>({ max: 5 })
for (let i = 0; i < 5; i++) {
  cache.set(i, i)
}
cache.get(2)
const popped: (number | undefined)[] = []
let p: number | undefined
do {
  p = cache.pop()
  popped.push(p)
} while (p !== undefined)
t.same(popped, [0, 1, 3, 4, 2, undefined])

t.test('pop with background fetches', async t => {
  const resolves: Record<number, (n: number) => void> = {}
  let aborted = false
  const f = new LRU<number, number>({
    max: 5,
    ttl: 10,
    fetchMethod: (k: number, _v, { signal }) => {
      signal.addEventListener('abort', () => (aborted = true))
      return new Promise<number>(res => (resolves[k] = res))
    },
  })

  // a fetch that's in progress with no stale val gets popped
  // without returning anything
  f.set(0, 0)
  let pf = f.fetch(1)
  f.set(2, 2)
  t.equal(f.size, 3)
  t.equal(f.pop(), 0)
  t.equal(f.size, 2)
  t.equal(f.pop(), 2)
  t.equal(f.size, 0)
  t.equal(aborted, true)
  resolves[1]?.(1)
  await t.rejects(pf)

  f.set(0, 0, { ttl: 0 })
  f.set(1, 111)
  await new Promise(r => setTimeout(r, 20))
  pf = f.fetch(1)
  f.set(2, 2, { ttl: 0 })
  t.equal(f.size, 3)
  t.equal(f.pop(), 0)
  t.equal(f.size, 2)
  t.equal(f.pop(), 111)
  t.equal(f.size, 1)
  t.equal(f.pop(), 2)
  t.equal(f.size, 0)
  resolves[1]?.(1)
  await t.rejects(pf)
})

t.test('pop calls dispose and disposeAfter', t => {
  let disposeCalled = 0
  let disposeAfterCalled = 0
  const c = new LRU({
    max: 5,
    dispose: () => disposeCalled++,
    disposeAfter: () => disposeAfterCalled++,
  })
  c.set(0, 0)
  c.set(1, 1)
  c.set(2, 2)
  t.equal(c.pop(), 0)
  t.equal(c.pop(), 1)
  t.equal(c.pop(), 2)
  t.equal(c.pop(), undefined)
  t.equal(c.size, 0)
  t.equal(disposeCalled, 3)
  t.equal(disposeAfterCalled, 3)
  t.end()
})

for (const value of [0, -0, false, '', NaN, 0n]) {
  for (const expired of [false, true]) {
    for (const withNext of [false, true]) {
      t.test(
        'pop refreshing ' +
          String(value) +
          (expired ? ' after expiry' : ' when forced') +
          (withNext ? ' before another entry' : ' alone'),
        async t => {
          let now = 1
          let finish!: (result: typeof value | number) => void
          let signal!: AbortSignal
          const disposed: unknown[][] = []
          const after: unknown[][] = []
          const c = new LRU<string, typeof value | number>({
            max: 2,
            ttl: 1,
            ttlResolution: 0,
            perf: { now: () => now },
            dispose: (...event) => disposed.push(event),
            disposeAfter: (...event) => after.push(event),
            fetchMethod: (_key, _previous, options) => {
              signal = options.signal
              return new Promise(resolve => {
                finish = resolve
              })
            },
          })
          c.set('refreshing', value)
          if (expired) now = 3
          const work = c
            .fetch('refreshing', { forceRefresh: !expired })
            .then(
              result => ({ result }),
              error => ({ error }),
            )
          if (withNext) c.set('next', 123, { ttl: 0 })
          t.equal(
            Object.is(c.pop(), value),
            true,
            'returns the previous value',
          )
          t.equal(
            c.size,
            withNext ? 1 : 0,
            'only removes one stored value',
          )
          t.equal(c.peek('next'), withNext ? 123 : undefined)
          t.same(disposed, [[value, 'refreshing', 'evict']])
          t.same(after, [[value, 'refreshing', 'evict']])
          t.equal(signal.aborted, true, 'cancels the removed refresh')
          finish(999)
          t.match(await work, { error: { message: 'evicted' } })
          t.equal(c.has('refreshing'), false, 'late result is not stored')
          if (withNext)
            t.equal(c.pop(), 123, 'next value remains available')
          t.equal(c.pop(), undefined, 'empty cache returns undefined')
        },
      )
    }
  }
}
