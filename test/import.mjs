import t from 'tap'
t.test('import', async t => {
  const imp = await import('../dist/mjs/index.js')
  t.equal(Object.getPrototypeOf(imp), null, 'import returns null obj')
  t.equal(
    imp.LRUCache,
    imp.default,
    'LRUCache member is default export'
  )
  t.equal(
    typeof imp.LRUCache,
    'function',
    'LRUCache export is function'
  )
  t.equal(imp.default.toString().split(/\n/)[0], 'class LRUCache {')
})
