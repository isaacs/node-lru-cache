// https://github.com/isaacs/node-lru-cache/issues/389
import t from 'tap'

const clock = t.clock
clock.enter()

const { LRUCache } = await import('../src/index.js')

const c = new LRUCache<number, number, void>({
  ttl: 1000,
  max: 10,
  ignoreFetchAbort: true,
  allowStaleOnFetchAbort: true,
  fetchMethod: async k => {
    return new Promise(res => {
      setTimeout(() => {
        res(k)
      }, 100 * k)
    })
  },
})

// c.set(1, 10)
// c.set(2, 20)

// make them stale
// clock.advance(2000)

//t.ok(c.getRemainingTTL(1) < 0, {
//  found: c.getRemainingTTL(1),
//  wanted: '< 0',
//})
//t.ok(c.getRemainingTTL(2) < 0, {
//  found: c.getRemainingTTL(2),
//  wanted: '< 0',
//})

const ac = new AbortController()
const ac2 = new AbortController()
// fails
const p2 = c.fetch(2, { signal: ac.signal })
const p1 = c.fetch(1, { signal: ac.signal })

//c.set(3, 3)

// works
// const p1 = c.fetch(1, { signal: ac.signal })
// const p2 = c.fetch(2, { signal: ac.signal })

clock.advance(50)
await new Promise<void>(res => queueMicrotask(res))
ac.abort(new Error('gimme the stale value'))
ac2.abort(new Error('gimme the stale value 2'))
t.equal(await p1, undefined)
t.equal(await p2, undefined)

t.equal(c.get(1, { allowStale: true }), undefined, 'get expect undef 1')
t.equal(c.get(2, { allowStale: true }), undefined, 'get expect undef 2')

clock.advance(100)
await new Promise<void>(res => queueMicrotask(res)).then(() => {})
t.equal(c.get(1), 1, 'get expect 1')
t.equal(c.get(2), undefined, 'get 2 expect undef')

clock.advance(100)
await new Promise<void>(res => queueMicrotask(res)).then(() => {})
t.equal(c.get(1), 1, 'get expect 1')
t.equal(c.get(2), 2, 'get expect 2')
