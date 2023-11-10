import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/index.js'

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
