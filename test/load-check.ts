process.env.TAP_BAIL = '1'
import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/index.js'
import { expose } from './fixtures/expose.js'

const max = 10000
const cache = new LRU<string, number[]>({ max })

import crypto from 'crypto'
const getVal = () => [
  crypto.randomBytes(12).toString('hex'),
  crypto.randomBytes(12).toString('hex'),
  crypto.randomBytes(12).toString('hex'),
  crypto.randomBytes(12).toString('hex'),
]

const seeds = new Array(max * 3)
// fill up the cache to start
for (let i = 0; i < max * 3; i++) {
  const v = getVal()
  seeds[i] = [v.join(':'), v]
}
t.pass('generated seed data')

const verifyCache = () => {
  // walk down the internal list ensuring that every key is the key to that
  // index in the keyMap, and the value matches.
  const e = expose(cache)
  for (const [k, i] of e.keyMap.entries()) {
    const v = e.valList[i] as number[]
    const key = e.keyList[i]
    if (k !== key) {
      t.equal(k, key, 'key at proper index', { k, i })
    }
    if (v.join(':') !== k) {
      t.equal(k, v.join(':'), 'proper value at index', { v, i })
    }
  }
}

let cycles = 0
const cycleLength = Math.floor(max / 100)
while (cycles < max * 5) {
  const r = Math.floor(Math.random() * seeds.length)
  const seed = seeds[r]
  const v = cache.get(seed[0])
  if (v === undefined) {
    cache.set(seed[0], seed[1])
  } else {
    t.equal(v.join(':'), seed[0], 'correct get ' + cycles, {
      seed,
      v,
    })
  }
  if (++cycles % cycleLength === 0) {
    verifyCache()
    t.pass('cycle check ' + cycles)
  }
}
