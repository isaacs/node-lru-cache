const t = require('tap')
const LRU = require('../')

const c = new LRU({ max: 5 })
for (let i = 0; i < 8; i++) {
  c.set(i, String(i))
}
t.matchSnapshot(c.rawIterate(), 'rawIterate')
t.matchSnapshot(c.keys(), 'keys')
t.matchSnapshot(c.values(), 'values')
t.matchSnapshot(c.entries(), 'values')
t.matchSnapshot(c.dump(), 'dump')

c.set(4, 'new value 4')
t.matchSnapshot(c.rawIterate(), 'rawIterate, new value 4')
t.matchSnapshot(c.keys(), 'keys, new value 4')
t.matchSnapshot(c.values(), 'values, new value 4')
t.matchSnapshot(c.entries(), 'values, new value 4')
t.matchSnapshot(c.dump(), 'dump, new value 4')

// pretend an entry is stale for some reason
c.current.get(7).stale = true
t.matchSnapshot(c.rawIterate(), 'rawIterate, 7 stale')
t.matchSnapshot(c.keys(), 'keys, 7 stale')
t.matchSnapshot(c.values(), 'values, 7 stale')
t.matchSnapshot(c.entries(), 'values, 7 stale')
t.matchSnapshot(c.dump(), 'dump, 7 stale')

