import t from 'tap'
import { LRUCache } from '../dist/esm/index.js'

t.test('emits warning', t => {
  const { emitWarning } = process
  t.teardown(() => {
    process.emitWarning = emitWarning
  })
  const warnings: [string, string, string][] = []
  Object.defineProperty(process, 'emitWarning', {
    value: (msg: string, type: string, code: string) => {
      warnings.push([msg, type, code])
    },
    configurable: true,
    writable: true,
  })
  //@ts-expect-error
  new LRUCache({
    ttl: 100,
  })
  t.same(warnings, [
    [
      'TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.',
      'UnboundedCacheWarning',
      'LRU_CACHE_UNBOUNDED',
    ],
  ])
  t.end()
})

t.test('prints to stderr if no process.emitWarning', t => {
  const { LRUCache: LRU } = t.mockRequire('../', {}) as {
    LRUCache: typeof LRUCache
  }
  const { error } = console
  const { emitWarning } = process
  t.teardown(() => {
    console.error = error
    process.emitWarning = emitWarning
  })
  const warnings: [string][] = []
  Object.defineProperty(console, 'error', {
    value: (msg: string) => {
      warnings.push([msg])
    },
    configurable: true,
    writable: true,
  })
  Object.defineProperty(process, 'emitWarning', {
    value: undefined,
    configurable: true,
    writable: true,
  })
  //@ts-expect-error
  new LRU({
    ttl: 100,
  })
  //@ts-expect-error
  new LRU({
    ttl: 100,
  })
  t.same(warnings, [
    [
      '[LRU_CACHE_UNBOUNDED] UnboundedCacheWarning: TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.',
    ],
  ])
  t.end()
})
