const LRU = require('../')
const c = new LRU({ max: 5 })
const t = require('tap')

t.test('list integrity', { bail: true }, t => {
  const e = index => ({
    index,
    prev: c.prev[index],
    _: index === c.tail ? 'T' : index === c.head ? 'H' : ('' + index),
    next: c.next[index],
    head: c.head,
    tail: c.tail,
  })
  const snap = () => {
    const a = []
    for (let i = 0; i < 5; i++) {
      a.push(e(i))
    }
    return a
  }
  const integrity = (msg) => {
    t.test(msg, { bail: false }, t => {
      let fail = false
      for (let i = 0; i < c.max; i++) {
        if (i !== c.head) {
          t.equal(c.next[c.prev[i]], i, 'n[p[i]] === i')
        }
        if (i !== c.tail) {
          t.equal(c.prev[c.next[i]], i, 'p[n[i]] === i')
        }
      }
      t.end()
    })
  }

  for (let i = 0; i < 5; i++) {
    c.set(i, i)
  }

  t.matchSnapshot(snap(), 'list after initial fill')
  integrity('after initial fill')
  c.moveToTail(2)
  t.matchSnapshot(snap(), 'list after moveToTail 2')
  integrity('after moveToTail 2')
  c.moveToTail(4)
  t.matchSnapshot(snap(), 'list after moveToTail 4')
  integrity('after moveToTail 4')

  t.end()
})
