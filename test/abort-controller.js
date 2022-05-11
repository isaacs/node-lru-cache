// this is just a test of the AbortController polyfill
// which is a little bit weird, since that's not about lru caching
// at all, so it's tempting to think that this module should
// pull it in as a dep or something.  that would be the
// javascripty thing to do, right?  but it would mean that
// this is no longer a zero-deps module, so meh.  it's fine.
global.AbortController = null
global.AbortSignal = null

const t = require('tap')

const LRUCache = require('../')
const { AbortController, AbortSignal } = LRUCache

t.type(AbortController, 'function')
t.type(AbortSignal, 'function')

t.test('onabort method', t => {
  const ac = new AbortController()
  t.type(ac.signal, AbortSignal)

  let calledOnAbort = false
  ac.signal.onabort = () => (calledOnAbort = true)
  ac.abort()
  t.equal(calledOnAbort, true, 'called onabort method')

  t.end()
})

t.test('add/remove event listener', t => {
  const ac = new AbortController()
  let receivedEvent = null
  ac.signal.addEventListener('abort', e => (receivedEvent = e))
  const nope = () => {
    throw 'nope'
  }
  ac.signal.addEventListener('abort', nope)
  ac.signal.removeEventListener('abort', nope)
  ac.signal.addEventListener('foo', nope)
  ac.signal.dispatchEvent({ type: 'foo', target: ac.signal })
  ac.signal.removeEventListener('foo', nope)
  ac.abort()
  t.match(receivedEvent, { type: 'abort', target: ac.signal })
  t.end()
})
