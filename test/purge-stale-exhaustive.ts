if (typeof performance === 'undefined') {
  Object.assign(global, {
    performance: (await import('perf_hooks')).performance,
  })
}

import assert from 'node:assert'
import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/index.js'
import { expose } from './fixtures/expose.js'

const clock = t.clock
clock.advance(1)

const boolOpts = (n: number): number[][] => {
  const mask = Math.pow(2, n)
  const arr: number[][] = []
  for (let i = 0; i < mask; i++) {
    arr.push(
      (mask + i)
        .toString(2)
        .slice(1)
        .split('')
        .map(n => +n)
    )
  }
  return arr
}

const permute = (arr: number[] | number): number[][] => {
  if (typeof arr === 'number') {
    return permute(Object.keys(new Array(arr).fill('')).map(n => +n))
  }
  if (arr.length === 1) {
    return [arr]
  }
  const permutations = []
  // recurse over selecting any of the items
  for (let i = 0; i < arr.length; i++) {
    const items = arr.slice(0)
    const item = items.splice(i, 1)
    permutations.push(
      ...permute(items).map(perm => item.concat(perm))
    )
  }
  return permutations
}

const runTestStep = ({
  order,
  stales = -1,
  len,
}: {
  order: number[]
  stales?: number[] | -1
  len: number
}) => {
  // generate stales at this level because it's faster that way,
  // fewer tap pieces to prop it all up.
  if (stales === -1) {
    for (const stales of boolOpts(len)) {
      runTestStep({ order, stales, len })
    }
    return true
  }

  clock.enter()
  const c = new LRU({ max: len, ttl: 100 })
  const e = expose(c)
  // fill the array with index matching k/v
  for (let i = 0; i < len; i++) {
    if (stales[i]) {
      c.set(i, i, { ttl: 1 })
    } else {
      c.set(i, i)
    }
  }

  // now get() items to reorder
  for (const index of order) {
    c.get(index)
  }

  assert.deepEqual([...e.rindexes()], order, 'got expected ordering')

  // advance clock so masked go stale
  clock.advance(10)
  c.purgeStale()
  assert.deepEqual(
    [...e.rindexes()],
    [...e.rindexes({ allowStale: true })]
  )
  // make all go stale
  clock.advance(100)
  c.purgeStale()
  assert.deepEqual([...e.rindexes({ allowStale: true })], [])
  clock.exit()
  return true
}

t.test('exhaustive tests', t => {
  // this is a brutal test.
  // Generate every possible ordering of indexes.
  // then for each ordering, generate every possible arrangement of staleness
  // Verify that purgeStale produces the correct result every time.
  const len = 5
  for (const order of permute(len)) {
    const name = `order=${order.join('')}`
    t.test(name, t => {
      t.plan(1)
      runTestStep({ order, len })
      t.pass('no problems')
    })
  }
  t.end()
})
