const t = require('tap')

const clock = {
  performance: {
    now: () => clock.now,
  },
  now: 0,
  advance: n => clock.now += n,
}

const runTests = (LRU, t) => {
  t.test('ttl tests defaults', t => {
    const c = new LRU({ max: 5, ttl: 10 })
    c.set(1, 1)
    t.equal(c.get(1), 1)
    clock.advance(5)
    t.equal(c.get(1), 1)
    clock.advance(5)
    t.equal(c.get(1), 1)
    clock.advance(1)
    t.equal(c.has(1), false)
    t.equal(c.get(1), undefined)
    t.equal(c.size, 0)

    c.set(2, 2, 100)
    clock.advance(50)
    t.equal(c.has(2), true)
    t.equal(c.get(2), 2)
    clock.advance(51)
    t.equal(c.has(2), false)
    t.equal(c.get(2), undefined)

    c.reset()
    for (let i = 0; i < 9; i++) {
      c.set(i, i)
    }
    // now we have 9 items
    // get an expired item from old set
    clock.advance(11)
    t.equal(c.has(4), false)
    t.equal(c.get(4), undefined)

    t.end()
  })

  t.test('ttl with allowStale', t => {
    const c = new LRU({ max: 5, ttl: 10, allowStale: true })
    c.set(1, 1)
    t.equal(c.get(1), 1)
    clock.advance(5)
    t.equal(c.get(1), 1)
    clock.advance(5)
    t.equal(c.get(1), 1)
    clock.advance(1)
    t.equal(c.has(1), false)
    t.equal(c.get(1), 1)
    t.equal(c.get(1), undefined)
    t.equal(c.size, 0)

    c.set(2, 2, 100)
    clock.advance(50)
    t.equal(c.has(2), true)
    t.equal(c.get(2), 2)
    clock.advance(51)
    t.equal(c.has(2), false)
    t.equal(c.get(2), 2)
    t.equal(c.get(2), undefined)

    c.reset()
    for (let i = 0; i < 9; i++) {
      c.set(i, i)
    }
    // now we have 9 items
    // get an expired item from old set
    clock.advance(11)
    t.equal(c.has(4), false)
    t.equal(c.get(4), 4)
    t.equal(c.get(4), undefined)

    t.end()
  })

  t.test('ttl with updateAgeOnGet', t => {
    const c = new LRU({ max: 5, ttl: 10, updateAgeOnGet: true })
    c.set(1, 1)
    t.equal(c.get(1), 1)
    clock.advance(5)
    t.equal(c.get(1), 1)
    clock.advance(5)
    t.equal(c.get(1), 1)
    clock.advance(1)
    t.equal(c.has(1), true)
    t.equal(c.get(1), 1)
    t.equal(c.size, 1)
    c.reset()

    c.set(2, 2, 100)
    for (let i = 0; i < 10; i++) {
      clock.advance(50)
      t.equal(c.has(2), true)
      t.equal(c.get(2), 2)
    }
    clock.advance(101)
    t.equal(c.has(2), false)
    t.equal(c.get(2), undefined)

    c.reset()
    for (let i = 0; i < 9; i++) {
      c.set(i, i)
    }
    // now we have 9 items
    // get an expired item from old set
    t.equal(c.has(3), true)
    t.equal(c.get(3), 3)
    clock.advance(11)
    t.equal(c.has(4), false)
    t.equal(c.get(4), undefined)

    t.end()
  })

  t.end()
}

t.test('tests with perf_hooks.performance.now()', t => {
  const LRU = t.mock('../', { perf_hooks: clock })
  runTests(LRU, t)
})

t.test('tests using Date.now()', t => {
  const Date_ = global.Date
  t.teardown(() => global.Date = Date_)
  global.Date = clock.performance
  const LRU = t.mock('../', { perf_hooks: {} })
  runTests(LRU, t)
})


