var test = require('tap').test
if (global.NoSymbol) global.Symbol = false
var LRU = require('../')

test('alias delete', function (t) {
  var cache1 = new LRU({max: 10})
  var cache2 = new LRU({max: 10})
  cache1.set('key', 'value')
  cache2.set('key', 'value')
  cache1.del('key')
  cache2.delete('key')
  t.equal(cache1.get('key'), undefined)
  t.equal(cache2.get('key'), undefined)
  t.end()
})

test('alias clear', function (t) {
  var cache1 = new LRU({max: 10})
  var cache2 = new LRU({max: 10})
  cache1.set('key', 'value')
  cache2.set('key', 'value')
  cache1.reset()
  cache2.clear()
  t.equal(cache1.get('key'), undefined)
  t.equal(cache2.get('key'), undefined)
  t.end()
})
