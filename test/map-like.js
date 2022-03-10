if (typeof performance === 'undefined') {
  global.performance = require('perf_hooks').performance
}

const t = require('tap')
const LRU = require('../')

const c = new LRU({ max: 5, maxSize: 5, sizeCalculation: () => 1 })

t.matchSnapshot(c.keys(), 'empty, keys')
t.matchSnapshot(c.values(), 'empty, values')
t.matchSnapshot(c.entries(), 'empty, entries')
t.matchSnapshot(c.dump(), 'empty, dump')

for (let i = 0; i < 8; i++) {
  c.set(i, String(i))
}

const e = i => ({
  i,
  k: c.keyList[0],
  v: c.valList[i],
  p: c.prev[i],
  n: c.next[i],
  h: c.head,
  t: c.tail,
})

t.matchSnapshot(c.keys(), 'keys')
t.matchSnapshot(c.values(), 'values')
t.matchSnapshot(c.entries(), 'entries')
t.matchSnapshot(c.dump(), 'dump')

c.set(4, 'new value 4')
t.matchSnapshot(c.keys(), 'keys, new value 4')
t.matchSnapshot(c.values(), 'values, new value 4')
t.matchSnapshot(c.entries(), 'entries, new value 4')
t.matchSnapshot(c.dump(), 'dump, new value 4')

// pretend an entry is stale for some reason
c.set(7, 'stale', { ttl: 1, size: 1 })
c.starts[c.keyMap.get(7)] = performance.now() - 10000
const seen = []
for (const i of c.indexes()) {
  seen[i] = seen[i] || 0
  seen[i]++
  if (seen[i] > 2) {
    throw new Error('cycle on ' + i)
  }
}
seen.length = 0
for (const i of c.rindexes()) {
  seen[i] = seen[i] || 0
  seen[i]++
  if (seen[i] > 2) {
    throw new Error('cycle on ' + i)
  }
}
t.matchSnapshot(c.keys(), 'keys, 7 stale')
t.matchSnapshot(c.values(), 'values, 7 stale')
t.matchSnapshot(c.entries(), 'entries, 7 stale')
t.matchSnapshot(c.dump(), 'dump, 7 stale')

const feArr = []
c.forEach((value, key) => feArr.push([value, key]))
t.matchSnapshot(feArr, 'forEach, no thisp')
const rfeArr = []
c.rforEach((value, key) => rfeArr.push([value, key]))
t.matchSnapshot(rfeArr, 'rforEach, no thisp')
const feArrThisp = []
const thisp = {a:1}
c.forEach(function (value, key) { feArrThisp.push([value, key, this]) }, thisp)
t.matchSnapshot(feArrThisp, 'forEach, with thisp')
const rfeArrThisp = []
const rthisp = {r:1}
c.rforEach(function (value, key) { rfeArrThisp.push([value, key, this]) }, rthisp)
t.matchSnapshot(rfeArrThisp, 'forEach, with thisp')

// when cache is empty, these should do nothing
const empty = new LRU({max:10})
empty.forEach(() => { throw new Error('fail empty forEach') })
empty.rforEach(() => { throw new Error('fail empty rforEach') })
