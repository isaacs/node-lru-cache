// vim: set nowrap:
var util = require('util')
var t = require('tap')
var LRU = require('../')

var l = LRU()

function cleanTime (output) {
  return output.replace(/now:\s*[0-9]+,/g, 'now: {time},')
}

function inspect () {
  t.matchSnapshot(cleanTime(util.inspect(l)), 'output')
  t.matchSnapshot(cleanTime(l.inspect()), 'output')
}

inspect()

l.max = 10
inspect()

l.maxAge = 50
inspect()

l.set({ foo: 'bar' }, 'baz')
inspect()

l.maxAge = 0
l.set(1, { a: { b: { c: { d: { e: { f: {} } } } } } })
inspect()

l.allowStale = true
inspect()

setTimeout(function () {
  inspect()

  // prune stale items
  l.forEach(function () {})
  inspect()

  l.lengthCalculator = function () { return 5 }
  inspect()

  l.max = 0
  inspect()

  l.maxAge = 100
  inspect()
  l.allowStale = false
  inspect()

  l.maxAge = 0
  inspect()

  l.lengthCalculator = null
  inspect()
}, 100)
