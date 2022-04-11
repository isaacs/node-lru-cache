#!/usr/bin/env node --max_old_space_size=400 --expose_gc

// https://github.com/isaacs/node-lru-cache/issues/227

if (typeof gc !== 'function') {
  throw new Error('run with --expose-gc')
}

let heapdump
try {
  heapdump = require('heapdump')
} catch (e) {
  const {spawnSync} = require('child_process')
  spawnSync('npm', ['install'], { cwd: __dirname, stdio: 'inherit' })
  heapdump = require('heapdump')
}

const LRU = require('../')
const maxSize = 1_000_000
const itemSize = 1_000
const expectItemCount = Math.floor(maxSize / itemSize)
const profEvery = 100_000
const n = 10_000_000

const sizeCalculation = s => s.length || 1
const max = expectItemCount + 1
const keyRange = expectItemCount * 2
const makeItem = () => Buffer.alloc(itemSize)

const v8 = require('v8')
const prof = async (i, cache, name) => {
  // run gc so that we know if we're actually leaking memory, or just
  // that the gc is being lazy and not responding until there's memory
  // pressure.
  gc()
  const file = `${__dirname}/heapdump-${name}-${i}.heapsnapshot`
  await new Promise((res, rej) =>
    heapdump.writeSnapshot(file, er => er ? rej(er) : res()))
  if (!cache || i === 0) {
    console.log(i, v8.getHeapStatistics(), file)
  }
  if (cache && i === 0) {
    console.log(max, cache.valList.length, cache.free.length)
  }
}

const test = async (name, cache) => {
  console.log(name)
  for (let i = 0; i < n; i++) {
    if ((i % profEvery) === 0) {
      await prof(i, cache, name)
    }

    // add items within a range of 2x the expected item count,
    // so we get evictions happening
    const item = makeItem()
    cache.set(i % keyRange, item)

    // get some random item, too, to keep the list a bit shuffled.
    // often these will be missing, of course, but expectItemCount/keyRange
    // times they'll be a hit, once the cache is full.
    const j = Math.floor(Math.random() * keyRange)
    cache.get(j)
  }
  cache = null
  prof(n, null, name)
}

const main = async () => {
  await test('max-no-maxSize', new LRU({ max }))
  await test('max-maxSize', new LRU({ max, maxSize, sizeCalculation }))
  await test('no-max-maxSize', new LRU({ maxSize, sizeCalculation }))
}

main()
