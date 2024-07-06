import t from 'tap'
const clock = t.clock
t.teardown(clock.enter())

import { LRUCache as LRU } from '../dist/esm/index.js'
import { expose } from './fixtures/expose.js'

const entriesFromForeach = <K extends {}, V extends {}>(
  c: LRU<K, V>
): [k: K, v: V][] => {
  const e: [k: K, v: V][] = []
  c.forEach((v, k) => e.push([k, v]))
  return e
}
const entriesFromRForeach = <K extends {}, V extends {}>(
  c: LRU<K, V>
): [k: K, v: V][] => {
  const e: [k: K, v: V][] = []
  c.rforEach((v, k) => e.push([k, v]))
  return e
}

t.test('bunch of iteration things', async t => {
  const resolves: Record<number, (s: string) => void> = {}

  const c = new LRU<number, string>({
    max: 5,
    maxSize: 5,
    sizeCalculation: () => 1,
    fetchMethod: k => new Promise(resolve => (resolves[k] = resolve)),
  })

  t.matchSnapshot(c.keys(), 'empty, keys')
  t.matchSnapshot(c.values(), 'empty, values')
  t.matchSnapshot(c.entries(), 'empty, entries')
  t.matchSnapshot(entriesFromForeach(c), 'empty, foreach')
  t.matchSnapshot(c.rkeys(), 'empty, rkeys')
  t.matchSnapshot(c.rvalues(), 'empty, rvalues')
  t.matchSnapshot(c.rentries(), 'empty, rentries')
  t.matchSnapshot(entriesFromRForeach(c), 'empty, rforeach')
  t.matchSnapshot(c.dump(), 'empty, dump')

  const p99 = c.fetch(99)
  const testp99 = t.rejects(p99, 'aborted by eviction')
  const p123 = c.fetch(123)

  t.matchSnapshot(c.keys(), 'pending fetch, keys')
  t.matchSnapshot(c.values(), 'pending fetch, values')
  t.matchSnapshot(c.entries(), 'pending fetch, entries')
  t.matchSnapshot(entriesFromForeach(c), 'pending fetch, foreach')
  t.matchSnapshot(c.rkeys(), 'pending fetch, rkeys')
  t.matchSnapshot(c.rvalues(), 'pending fetch, rvalues')
  t.matchSnapshot(c.rentries(), 'pending fetch, rentries')
  t.matchSnapshot(entriesFromRForeach(c), 'pending fetch, rforeach')
  t.matchSnapshot(c.dump(), 'pending fetch, dump')

  for (let i = 0; i < 3; i++) {
    c.set(i, String(i))
  }

  resolves[123]?.('123')
  t.equal(await p123, '123')
  t.matchSnapshot(c.keys(), 'fetch 123 resolved, keys')
  t.matchSnapshot(c.values(), 'fetch 123 resolved, values')
  t.matchSnapshot(c.entries(), 'fetch 123 resolved, entries')
  t.matchSnapshot(
    entriesFromForeach(c),
    'fetch 123 resolved, foreach'
  )
  t.matchSnapshot(c.rkeys(), 'fetch 123 resolved, rkeys')
  t.matchSnapshot(c.rvalues(), 'fetch 123 resolved, rvalues')
  t.matchSnapshot(c.rentries(), 'fetch 123 resolved, rentries')
  t.matchSnapshot(
    entriesFromRForeach(c),
    'fetch 123 resolved, rforeach'
  )
  t.matchSnapshot(c.dump(), 'fetch 123 resolved, dump')

  for (let i = 3; i < 8; i++) {
    c.set(i, String(i))
  }

  t.matchSnapshot(c.keys(), 'keys')
  t.matchSnapshot(c.values(), 'values')
  t.matchSnapshot(c.entries(), 'entries')
  t.matchSnapshot(c.rkeys(), 'rkeys')
  t.matchSnapshot(c.rvalues(), 'rvalues')
  t.matchSnapshot(c.rentries(), 'rentries')
  t.matchSnapshot(c.dump(), 'dump')

  c.set(4, 'new value 4')
  t.matchSnapshot(c.keys(), 'keys, new value 4')
  t.matchSnapshot(c.values(), 'values, new value 4')
  t.matchSnapshot(c.entries(), 'entries, new value 4')
  t.matchSnapshot(c.rkeys(), 'rkeys, new value 4')
  t.matchSnapshot(c.rvalues(), 'rvalues, new value 4')
  t.matchSnapshot(c.rentries(), 'rentries, new value 4')
  t.matchSnapshot(c.dump(), 'dump, new value 4')

  resolves[99]?.('99')
  await testp99
  t.matchSnapshot(c.keys(), 'keys, resolved fetch 99 too late')
  t.matchSnapshot(c.values(), 'values, resolved fetch 99 too late')
  t.matchSnapshot(c.entries(), 'entries, resolved fetch 99 too late')
  t.matchSnapshot(c.rkeys(), 'rkeys, resolved fetch 99 too late')
  t.matchSnapshot(c.rvalues(), 'rvalues, resolved fetch 99 too late')
  t.matchSnapshot(
    c.rentries(),
    'rentries, resolved fetch 99 too late'
  )
  t.matchSnapshot(c.dump(), 'dump, resolved fetch 99 too late')

  // pretend an entry is stale for some reason
  c.set(7, 'stale', { ttl: 1, size: 1 })
  const e = expose(c)
  const idx = e.keyMap.get(7)
  if (!e.starts) throw new Error('no starts??')
  e.starts[idx as number] = clock.now() - 10000
  const seen: number[] = []
  for (const i of e.indexes()) {
    seen[i] = seen[i] || 0
    seen[i]++
    if ((seen[i] as number) > 2) {
      throw new Error('cycle on ' + i)
    }
  }
  seen.length = 0
  for (const i of e.rindexes()) {
    seen[i] = seen[i] || 0
    seen[i]++
    if ((seen[i] as number) > 2) {
      throw new Error('cycle on ' + i)
    }
  }
  t.matchSnapshot(c.keys(), 'keys, 7 stale')
  t.matchSnapshot(c.values(), 'values, 7 stale')
  t.matchSnapshot(c.entries(), 'entries, 7 stale')
  t.matchSnapshot(c.rkeys(), 'rkeys, 7 stale')
  t.matchSnapshot(c.rvalues(), 'rvalues, 7 stale')
  t.matchSnapshot(c.rentries(), 'rentries, 7 stale')
  t.matchSnapshot(c.dump(), 'dump, 7 stale')

  const feArr: any[] = []
  c.forEach((value, key) => feArr.push([value, key]))
  t.matchSnapshot(feArr, 'forEach, no thisp')
  const rfeArr: any[] = []
  c.rforEach((value, key) => rfeArr.push([value, key]))
  t.matchSnapshot(rfeArr, 'rforEach, no thisp')
  const feArrThisp: any[] = []
  const thisp = { a: 1 }
  c.forEach(function (this: typeof thisp, value, key) {
    feArrThisp.push([value, key, this])
  }, thisp)
  t.matchSnapshot(feArrThisp, 'forEach, with thisp')
  const rfeArrThisp: any[] = []
  const rthisp = { r: 1 }
  c.rforEach(function (this: typeof thisp, value, key) {
    rfeArrThisp.push([value, key, this])
  }, rthisp)
  t.matchSnapshot(rfeArrThisp, 'forEach, with thisp')

  // when cache is empty, these should do nothing
  const empty = new LRU({ max: 10 })
  empty.forEach(() => {
    throw new Error('fail empty forEach')
  })
  empty.rforEach(() => {
    throw new Error('fail empty rforEach')
  })
})
