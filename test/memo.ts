import t from 'tap'
import { LRUCache } from '../src/index.js'

t.throws(
  () =>
    new LRUCache<number, number>({
      max: 1,
      //@ts-expect-error
      memoMethod: true,
    })
)
t.throws(() => new LRUCache({ max: 1 }).memo(3))

t.test('no funny business', t => {
  const memoCalls: number[] = []
  const c = new LRUCache<number, number>({
    max: 5,
    memoMethod: k => {
      memoCalls.push(k)
      return k ** k
    },
  })
  t.equal(c.get(2), undefined)
  const four = c.memo(2)
  const fur = c.memo(2)
  t.equal(four, 4)
  t.equal(fur, 4)
  t.equal(c.get(2), 4)
  t.strictSame(memoCalls, [2], 'only called once')
  t.end()
})

t.test('with context', t => {
  const memoCalls: [number, number | undefined, boolean][] = []
  // if there's a value already, and context is set, assign a shorter TTL
  const memoMethod = (
    k: number,
    v: number | undefined,
    {
      context,
      options,
    }: LRUCache.MemoizerOptions<number, number, boolean>
  ) => {
    memoCalls.push([k, v, context])
    t.type(context, 'boolean')
    if (context) {
      return k
    } else {
      t.equal(options.noDeleteOnStaleGet, true)
      return k ** k
    }
  }

  const c = new LRUCache<number, number, boolean>({
    memoMethod,
    max: 5,
  })
  t.equal(c.memo(1, { context: true }), 1)
  t.equal(c.memo(1, { context: true }), 1)
  t.equal(c.memo(1, { context: false }), 1)
  t.equal(c.memo(2, { context: false, noDeleteOnStaleGet: true }), 4)
  t.equal(c.memo(2, { context: true }), 4)
  t.equal(c.memo(2, { context: false }), 4)
  t.strictSame(memoCalls, [
    [1, undefined, true],
    [2, undefined, false],
  ])
  t.end()
})
