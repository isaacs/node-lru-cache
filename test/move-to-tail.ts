import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/index.js'
import { expose } from './fixtures/expose.js'

const c = new LRU({ max: 5 })
const exp = expose(c)

t.test('list integrity', { bail: true }, t => {
  const e = (index: number) => ({
    index,
    prev: exp.prev[index],
    _:
      index === exp.tail
        ? 'T'
        : index === exp.head
        ? 'H'
        : '' + index,
    next: exp.next[index],
    head: exp.head,
    tail: exp.tail,
  })
  const snap = () => {
    const a: ReturnType<typeof e>[] = []
    for (let i = 0; i < 5; i++) {
      a.push(e(i))
    }
    return a
  }
  const integrity = (msg: string) => {
    t.test(msg, { bail: false }, t => {
      for (let i = 0; i < c.max; i++) {
        if (i !== exp.head) {
          t.equal(exp.next[exp.prev[i] as number], i, 'n[p[i]] === i')
        }
        if (i !== exp.tail) {
          t.equal(exp.prev[exp.next[i] as number], i, 'p[n[i]] === i')
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
  exp.moveToTail(2)
  t.matchSnapshot(snap(), 'list after moveToTail 2')
  integrity('after moveToTail 2')
  exp.moveToTail(4)
  t.matchSnapshot(snap(), 'list after moveToTail 4')
  integrity('after moveToTail 4')

  t.end()
})
