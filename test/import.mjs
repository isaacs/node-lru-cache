import t from 'tap'
t.test('import', async t => {
  const imp = await import('../dist/esm/index.js')
  t.equal(Object.getPrototypeOf(imp), null, 'import returns null obj')
  t.equal(
    typeof imp.LRUCache,
    'function',
    'LRUCache export is function'
  )
  t.equal(
    imp.LRUCache.toString().split(/\r?\n/)[0].trim(),
    'class LRUCache {'
  )
})
