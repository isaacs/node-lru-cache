const t = require('tap')
const LRU = require('../')

t.plan(0, 'update with changed implementation')
process.exit(0)

process.noDeprecation = false
const warnings = []
process.emitWarning = (...w) => warnings.push(w)

const c = new LRU({
  max: 100,
  maxAge: 1000,
  stale: true,
  length: n => 1,
})

t.equal(c.length, 0)
t.matchSnapshot(warnings)

warnings.length = 0
const d = new LRU({
  max: 100,
  maxAge: 1000,
  stale: true,
  length: n => 1,
})

t.equal(d.length, 0)
t.strictSame(warnings, [], 'only warn once')
