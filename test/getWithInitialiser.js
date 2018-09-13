var test = require('tap').test
if (global.NoSymbol) global.Symbol = false
var LRU = require('../')

// Examples demonstrating more "complicated" examples (e.g. demultiplexing requests).

test('get with initialiser', function (t) {
  var cache = new LRU({max: 10})
  var x = 1
  var initialiser = () => 'bar' + (++x)
  cache.set('key', 'value')
  t.equal(cache.get('key'), 'value')
  t.equal(cache.get('nada', initialiser), 'bar2')
  t.equal(cache.get('nada', initialiser), 'bar2')
  t.equal(cache.get('nada'), 'bar2')
  t.equal(cache.length, 2)
  t.equal(cache.max, 10)
  t.end()
})

test('get with initialiser and expiry', function (t) {
  var n = process.env.CI ? 1000 : 100
  var cache = new LRU({
    max: 5,
    maxAge: n * 2
  })

  var x = 1
  var initialiser = () => 'bar' + (++x)

  t.equal(cache.get('a', initialiser), 'bar2')

  // pre first timeout
  setTimeout(function () {
    t.equal(cache.get('a', initialiser), 'bar2')
  }, n) // expires at 2n

  // post first timeout
  setTimeout(function () {
    t.equal(cache.get('a', initialiser), 'bar3')
    t.end()
  }, n * 3)
})
