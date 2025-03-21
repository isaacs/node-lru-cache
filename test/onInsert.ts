import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/index.js'

t.test('onInsert', t => {
  const inserted: any[] = []
  const c = new LRU({
    max: 5,
    onInsert: (v, k, r) => inserted.push([v, k, r]),
  })

  for (let i = 0; i < 5; i++) {
    c.set(i, i)
  }
  t.strictSame(inserted, [
    [0, 0, 'add'],
    [1, 1, 'add'],
    [2, 2, 'add'],
    [3, 3, 'add'],
    [4, 4, 'add'],
  ])

  t.end()
})

t.test('onInsert with replace', t => {
  const inserted: any[] = []
  const c = new LRU({
    max: 5,
    onInsert: (v, k, r) => inserted.push([v, k, r]),
  })

  c.set(1, 1)
  c.set(2, 2)
  c.set(1, 'one')

  t.strictSame(inserted, [
    [1, 1, 'add'],
    [2, 2, 'add'],
    ['one', 1, 'replace'],
  ])

  t.end()
})

t.test('onInsert with value === undefined', t => {
  const inserted: any[] = []
  const c = new LRU({
    max: 5,
    onInsert: (v, k, r) => inserted.push([v, k, r]),
  })

  c.set(1, 1)
  c.set(1, undefined)
  c.set(2, undefined)
  t.strictSame(inserted, [[1, 1, 'add']])

  t.end()
})

t.test('onInsert with update (same value)', t => {
  const inserted: any[] = []
  const c = new LRU({
    max: 5,
    onInsert: (v, k, r) => inserted.push([v, k, r]),
  })

  c.set(1, 1)
  c.set(1, 1) // update with the same value

  t.strictSame(inserted, [
    [1, 1, 'add'],
    [1, 1, 'update'],
  ])

  t.end()
})
