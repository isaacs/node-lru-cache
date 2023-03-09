'use strict'

const precise = require('precise')
const retsu = require('retsu')
const dir = process.env.__LRU_BENCH_DIR || __dirname
const caches = require(dir + '/impls.js')
const num = +process.env.N || 10_000
const evict = num * 2
const times = 10
const x = 1e6
const dataOrder = []
const data1 = new Array(evict)
const data2 = new Array(evict)
const data3 = new Array(evict)

const typeGen = {
  numstr: z => (z % 2 === 0 ? z : String(z + 1)),
  pi: z => z * Math.PI,
  float: z => z + z / (evict + 1),
  obj: z => ({ z }),
  strint: z => String(z),
  str: z => 'foo' + z + 'bar',
  rand: z => z * Math.random(),
  sym: z => Symbol(String(z)),
  longstr: z => z + 'z'.repeat(1024 * 4),
  int: z => z,
  mix: z => typeGen[typeKeys[z % (typeKeys.length - 1)]](z),
}
const typeKeys = Object.keys(typeGen)

;(function seed() {
  let z = -1

  const t = process.env.TYPE || 'mix'
  while (++z < evict) {
    const x = typeGen[t](z)
    data1[z] = [x, Math.floor(Math.random() * 1e7)]
    dataOrder.push(z)
  }

  // shuffle up the key orders, so we're not just walking down the list.
  for (const key of dataOrder.sort(() => Math.random() - 0.5)) {
    data2[key] = [data1[key][0], Math.random() * 1e7]
  }

  for (const key of dataOrder.sort(() => Math.random() - 0.5)) {
    data3[key] = data1[key]
  }
})()

const runTest = id => {
  const time = {
    set: [],
    get1: [],
    update: [],
    get2: [],
    evict: [],
  }
  const results = {
    name: id,
    set: 0,
    get1: 0,
    update: 0,
    get2: 0,
    evict: 0,
  }

  let n = -1

  // super rudimentary correctness check
  // make sure that 5 puts get back the same 5 items we put
  // ignore stderr, some caches are complainy about some keys
  let error = console.error
  console.error = () => {}
  try {
    const s = Math.max(5, Math.min(Math.floor(num / 2), 50))
    const m = Math.min(s * 5, num)
    const lru = caches[id](s)
    for (let i = 0; i < s; i++) lru.set(data1[i][0], data1[i][1])
    for (let i = 0; i < s; i++) {
      if (lru.get(data1[i][0]) !== data1[i][1]) {
        if (!process.stdout.isTTY) process.stderr.write(id)
        error(' failed correctness check at key=%j', data1[i][0])
        postMessage(
          JSON.stringify({
            name: id,
            set: 0,
            get1: 0,
            update: 0,
            get2: 0,
            evict: 0,
          })
        )
        process.exit(1)
      }
    }
    if (!/^just a/.test(id) && !/unbounded$/.test(id)) {
      for (let i = s + 1; i < m; i++)
        lru.set(data1[i][0], data1[i][1])
      if (lru.get(data1[0][0])) {
        if (!process.stdout.isTTY) process.stderr.write(id)
        error(' failed eviction correctness check')
        postMessage(
          JSON.stringify({
            name: id,
            set: 0,
            get1: 0,
            update: 0,
            get2: 0,
            evict: 0,
          })
        )
        process.exit(1)
      }
    }
    lru.set('__proto__', { [__filename]: 'pwned' })
    if (lru.get(__filename)) {
      error(' failed prototype pollution check')
      if (!/^just a/.test(id)) {
        postMessage(
          JSON.stringify({
            name: id,
            set: 0,
            get1: 0,
            update: 0,
            get2: 0,
            evict: 0,
          })
        )
        process.exit(1)
      }
    }
  } catch (er) {
    if (!process.stdout.isTTY) process.stderr.write(id)
    error(' failed correctness check', er.stack)
    postMessage(
      JSON.stringify({
        name: id,
        set: 0,
        get1: 0,
        update: 0,
        get2: 0,
        evict: 0,
      })
    )
    process.exit(1)
  }

  console.error = error

  while (++n < times) {
    const lru = caches[id](num)
    const stimer = precise().start()
    for (let i = 0; i < num; i++) lru.set(data1[i][0], data1[i][1])
    time.set.push(stimer.stop().diff() / x)

    const gtimer = precise().start()
    for (let i = 0; i < num; i++) lru.get(data1[i][0])
    time.get1.push(gtimer.stop().diff() / x)

    const utimer = precise().start()
    for (let i = 0; i < num; i++) lru.set(data2[i][0], data2[i][1])
    time.update.push(utimer.stop().diff() / x)

    const g2timer = precise().start()
    for (let i = 0; i < num; i++) lru.get(data3[i][0])
    time.get2.push(g2timer.stop().diff() / x)

    const etimer = precise().start()
    for (let i = num; i < evict; i++)
      lru.set(data1[i][0], data1[i][1])
    time.evict.push(etimer.stop().diff() / x)
  }

  ;['set', 'get1', 'update', 'get2', 'evict'].forEach(i => {
    results[i] = Number(
      (num / retsu.median(time[i]).toFixed(2)).toFixed(0)
    )
  })

  postMessage(JSON.stringify(results))
}

if (typeof self !== 'undefined') {
  self.onmessage = ev => runTest(ev.data)
} else {
  global.postMessage = console.log
  runTest('lru-cache_CURRENT')
}
