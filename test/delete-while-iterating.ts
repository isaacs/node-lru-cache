import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/index.js'

t.beforeEach(t => {
  const c = new LRU({ max: 5 })
  c.set(0, 0)
  c.set(1, 1)
  c.set(2, 2)
  c.set(3, 3)
  c.set(4, 4)
  t.context = c
})

t.test('delete evens', t => {
  const c = t.context
  t.same([...c.keys()], [4, 3, 2, 1, 0])

  for (const k of c.keys()) {
    if (k % 2 === 0) {
      c.delete(k)
    }
  }

  t.same([...c.keys()], [3, 1])
  t.end()
})

t.test('delete odds', t => {
  const c = t.context
  t.same([...c.keys()], [4, 3, 2, 1, 0])

  for (const k of c.keys()) {
    if (k % 2 === 1) {
      c.delete(k)
    }
  }

  t.same([...c.keys()], [4, 2, 0])
  t.end()
})

t.test('rdelete evens', t => {
  const c = t.context
  t.same([...c.keys()], [4, 3, 2, 1, 0])

  for (const k of c.rkeys()) {
    if (k % 2 === 0) {
      c.delete(k)
    }
  }

  t.same([...c.keys()], [3, 1])
  t.end()
})

t.test('rdelete odds', t => {
  const c = t.context
  t.same([...c.keys()], [4, 3, 2, 1, 0])

  for (const k of c.rkeys()) {
    if (k % 2 === 1) {
      c.delete(k)
    }
  }

  t.same([...c.keys()], [4, 2, 0])
  t.end()
})

t.test('delete two of them', t => {
  const c = t.context
  t.same([...c.keys()], [4, 3, 2, 1, 0])
  for (const k of c.keys()) {
    if (k === 3) {
      c.delete(3)
      c.delete(4)
    } else if (k === 1) {
      c.delete(1)
      c.delete(0)
    }
  }
  t.same([...c.keys()], [2])
  t.end()
})

t.test('rdelete two of them', t => {
  const c = t.context
  t.same([...c.keys()], [4, 3, 2, 1, 0])
  for (const k of c.rkeys()) {
    if (k === 3) {
      c.delete(3)
      c.delete(4)
    } else if (k === 1) {
      c.delete(1)
      c.delete(0)
    }
  }
  t.same([...c.keys()], [2])
  t.end()
})
