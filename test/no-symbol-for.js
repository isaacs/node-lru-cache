var test = require('tap').test
global.Symbol = function Symbol () {}
var LRU = require('../')

test('basic', function (t) {
  var cache = new LRU({max: 10})
  cache.set('key', 'value')
  t.equal(cache.get('key'), 'value')
  t.equal(cache.get('nada'), undefined)
  t.equal(cache.length, 1)
  t.equal(cache.max, 10)
  t.end()
})
