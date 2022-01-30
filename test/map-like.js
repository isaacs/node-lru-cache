const t = require('tap')
const LRU = require('../')

const c = new LRU({ max: 5 })
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
t.matchSnapshot(c.entries(), 'values')
t.test('dump', { todo: 'not implemented' }, t =>
  t.matchSnapshot(c.dump(), 'dump'))

c.set(4, 'new value 4')
t.matchSnapshot(c.keys(), 'keys, new value 4')
t.matchSnapshot(c.values(), 'values, new value 4')
t.matchSnapshot(c.entries(), 'values, new value 4')
t.test('dump, new value 4', { todo: 'not implemented' }, t =>
  t.matchSnapshot(c.dump(), 'dump, new value 4'))

// pretend an entry is stale for some reason
c.set(7, 'stale', { ttl: 1 })
c.starts[c.keyMap.get(7)] = performance.now() - 10000
const seen = []
for (const i of c.indexes()) {
  seen[i] = seen[i] || 0
  seen[i]++
  if (seen[i] > 2) {
    throw new Error('cycle on ' + i)
  }
}
t.matchSnapshot(c.keys(), 'keys, 7 stale')
t.matchSnapshot(c.values(), 'values, 7 stale')
t.matchSnapshot(c.entries(), 'values, 7 stale')
t.test('dump, 7 stale', { todo: 'not implemented' }, t =>
  t.matchSnapshot(c.dump(), 'dump, 7 stale'))
