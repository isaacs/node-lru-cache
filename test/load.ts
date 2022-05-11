import t from 'tap'
import LRU from '../'

const c = new LRU<number, number>({ max: 5 })
for (let i = 0; i < 9; i++) {
  c.set(i, i)
}

const d = new LRU(c as LRU.Options<number, number>)
d.load(c.dump())

t.strictSame(d, c)
