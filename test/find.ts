import t from 'tap'
import LRU from '../'

const c = new LRU<number, { value: number }>({ max: 5 })

for (let i = 0; i < 9; i++) {
  c.set(i, { value: i })
}

t.equal(
  c.find(o => o.value === 4),
  c.get(4)
)
