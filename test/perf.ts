import t from 'tap'

t.test('perf is performance by default', async t => {
  const { defaultPerf } = await t.mockImport('../src/perf.js')
  t.equal(defaultPerf, performance)
})

t.test('perf is Date if no performance global', async t => {
  t.intercept(globalThis, 'performance', {
    value: undefined,
  })
  const { defaultPerf } = await t.mockImport('../src/perf.js')
  t.equal(defaultPerf, Date)
})
