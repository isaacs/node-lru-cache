if (typeof performance === 'undefined') {
  global.performance = require('perf_hooks').performance
}
import t from 'tap'
import LRU from '../'
import { expose } from './fixtures/expose'

const c = new LRU({ max: 5, maxSize: 5, sizeCalculation: () => 1 })

t.matchSnapshot(c.keys(), 'empty, keys')
t.matchSnapshot(c.values(), 'empty, values')
t.matchSnapshot(c.entries(), 'empty, entries')
t.matchSnapshot(c.rkeys(), 'empty, rkeys')
t.matchSnapshot(c.rvalues(), 'empty, rvalues')
t.matchSnapshot(c.rentries(), 'empty, rentries')
t.matchSnapshot(c.dump(), 'empty, dump')

for (let i = 0; i < 8; i++) {
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

// pretend an entry is stale for some reason
c.set(7, 'stale', { ttl: 1, size: 1 })
const e = expose(c)
const idx = e.keyMap.get(7)
e.starts[idx as number] = performance.now() - 10000
const seen: number[] = []
for (const i of e.indexes()) {
  seen[i] = seen[i] || 0
  seen[i]++
  if (seen[i] > 2) {
    throw new Error('cycle on ' + i)
  }
}
seen.length = 0
for (const i of e.rindexes()) {
  seen[i] = seen[i] || 0
  seen[i]++
  if (seen[i] > 2) {
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
c.forEach(function (value, key) {
  feArrThisp.push([value, key, this])
}, thisp)
t.matchSnapshot(feArrThisp, 'forEach, with thisp')
const rfeArrThisp: any[] = []
const rthisp = { r: 1 }
c.rforEach(function (value, key) {
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
