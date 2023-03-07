'use strict'

process.env.__LRU_BENCH_DIR = __dirname
require('mkdirp').sync(__dirname + '/results')

const Worker = require('tiny-worker')
const ora = require('ora')
const caches = Object.keys(require('./impls.js'))
const nth = caches.length
const { writeFileSync } = require('fs')

const types = {
  int: 'just an integer',
  strint: 'stringified integer',
  str: 'string that is not a number',
  numstr: 'a mix of integers and strings that look like them',
  pi: 'multiples of pi',
  float: 'floating point values',
  obj: 'an object with a single key',
  rand: 'random floating point number',
  sym: 'a Symbol object',
  longstr: 'a very long string',
  mix: 'a mix of all the types',
}

if (!process.env.TYPE) {
  const spawn = require('child_process').spawn
  const todo = Object.keys(types)
  const run = () =>
    new Promise(res => {
      const TYPE = todo.shift()
      if (!TYPE) return res()
      console.log(`${TYPE}: ${types[TYPE]}`)
      const child = spawn(process.execPath, [__filename], {
        env: { TYPE },
        stdio: 'inherit',
      })
      child.on('close', () => res(run()))
    })
  run()
} else {
  const spinner = ora(`Starting benchmark of ${nth} caches`).start(),
    promises = []

  caches.forEach((i, idx) => {
    promises.push(
      new Promise((resolve, reject) => {
        return (idx === 0 ? Promise.resolve() : promises[idx - 1])
          .then(() => {
            const worker = new Worker('worker.js')

            worker.onmessage = ev => {
              resolve(ev.data)
              worker.terminate()
            }

            worker.onerror = err => {
              reject(err)
              worker.terminate()
            }

            spinner.text = `Benchmarking ${
              idx + 1
            } of ${nth} caches [${i}]`
            worker.postMessage(i)
          })
          .catch(reject)
      })
    )
  })

  Promise.all(promises)
    .then(results => {
      const toMD = require('markdown-tables')
      const keysort = require('keysort')
      spinner.stop()
      const data = keysort(
        results.map(i => {
          const obj = JSON.parse(i)
          obj.score =
            obj.evict * 5 +
            obj.get2 * 5 +
            obj.get1 * 3 +
            obj.set * 2 +
            obj.update
          return obj
        }),
        'score desc'
      )

      const heading = 'name,set,get1,update,get2,evict,score'
      const csv =
        [heading]
          .concat(
            data.map(
              i =>
                `${i.name},${i.set},${i.get1},${i.update},${i.get2},${i.evict},${i.score}`
            )
          )
          .join('\n') + '\n'
      const resultsFile = `${__dirname}/results/${process.env.TYPE}.csv`
      writeFileSync(resultsFile, csv, 'utf8')
      console.log(toMD(csv))
    })
    .catch(err => {
      console.error(err.stack || err.message || err)
      process.exit(1)
    })
}
