import { LRUCache } from 'lru-cache'
import t from 'tap'

const cache = new LRUCache({
  max: 10_000,
  ttl: 1_000,
  ttlAutopurge: true,
})

t.before(async () => {
  const tasks = []
  for (let i = 0; i < 10_000; i++) {
    tasks.push(
      new Promise<void>(resolve => {
        const delay = Math.floor(Math.random() * 500)
        setTimeout(() => {
          const key = `item-${i}`
          cache.set(key, {})
          resolve()
        }, delay)
      }),
    )
  }
  await Promise.all(tasks)
})

t.test('verify all get autopurged', t => {
  setTimeout(() => {
    t.strictSame(
      {
        size: cache.size,
        dumpLength: cache.dump().length,
        keys: [...cache.keys()],
        values: [...cache.values()],
        entries: [...cache.entries()],
      },
      {
        size: 0,
        dumpLength: 0,
        keys: [],
        values: [],
        entries: [],
      },
    )
    t.end()
  }, 2000)
})
