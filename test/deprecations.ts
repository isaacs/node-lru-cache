import t from 'tap'
import LRU from '../'

const warnings: any[] = []
process.emitWarning = (...w) => warnings.push(w)

t.test('warns exactly once for a given deprecation', t => {
  const c = new LRU({
    max: 100,
    maxSize: 100,
    maxAge: 1000,
    stale: true,
    length: () => 1,
  })
  c.reset()
  t.equal(c.length, 0)
  t.equal(c.prune, c.purgeStale)
  t.equal(c.reset, c.clear)
  t.equal(c.del, c.delete)

  // not technically a "deprecation" but similar
  new LRU({ ttl: 10 })

  t.matchSnapshot(warnings)

  warnings.length = 0
  const d = new LRU({
    max: 100,
    maxSize: 100,
    maxAge: 1000,
    stale: true,
    length: () => 1,
  })
  d.reset()

  t.equal(d.length, 0)
  t.equal(d.prune, d.purgeStale)
  t.equal(d.reset, d.clear)
  new LRU({ ttl: 10 })

  t.strictSame(warnings, [], 'only warn once')

  warnings.length = 0
  t.end()
})

t.test(
  'does not do deprecation warning without process object',
  t => {
    // set process to null (emulate a browser)
    const proc = global.process
    const { error } = console
    t.teardown(() => {
      global.process = proc
      console.error = error
    })
    const consoleErrors: any[] = []
    console.error = (...a) => consoleErrors.push(a)
    // @ts-ignore
    global.process = {
      ...proc,
      // @ts-ignore
      emitWarning: null,
    }
    const LRU = t.mock('../', {})
    const c = new LRU({
      max: 100,
      maxSize: 100,
      maxAge: 1000,
      stale: true,
      length: () => 1,
    })
    c.reset()
    t.equal(c.length, 0)
    t.equal(c.prune, c.purgeStale)
    t.equal(c.reset, c.clear)
    t.equal(c.del, c.delete)
    global.process = proc

    t.strictSame(warnings, [], 'no process exists')
    t.matchSnapshot(consoleErrors, 'warnings sent to console.error')

    t.end()
  }
)
