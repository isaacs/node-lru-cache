export {}
const main = async () => {
  const { default: t } = await import('tap')
  const { spawn } = await import('child_process')

  // need to run both tests in parallel so we don't miss the close event
  t.jobs = 3

  const tsNode =
    process.platform === 'win32' ? 'ts-node.cmd' : 'ts-node'

  const warn = spawn(tsNode, [__filename, 'child'])
  const warnErr: Buffer[] = []
  warn.stderr.on('data', c => warnErr.push(c))

  const noWarn = spawn(tsNode, [__filename, 'child'], {
    env: {
      ...process.env,
      LRU_CACHE_IGNORE_AC_WARNING: '1',
    },
  })
  const noWarnErr: Buffer[] = []
  noWarn.stderr.on('data', c => noWarnErr.push(c))

  const noFetch = spawn(tsNode, [__filename, 'child-no-fetch'])
  const noFetchErr: Buffer[] = []
  noFetch.stderr.on('data', c => noFetchErr.push(c))

  t.test('no warning', async t => {
    await new Promise<void>(r =>
      noWarn.on('close', (code, signal) => {
        t.equal(code, 0)
        t.equal(signal, null)
        r()
      })
    )
    t.equal(Buffer.concat(noWarnErr).toString().trim(), '')
  })

  t.test('no warning (because no fetch)', async t => {
    await new Promise<void>(r =>
      noFetch.on('close', (code, signal) => {
        t.equal(code, 0)
        t.equal(signal, null)
        r()
      })
    )
    t.equal(Buffer.concat(noFetchErr).toString().trim(), '')
  })

  t.test('warning', async t => {
    await new Promise<void>(r =>
      warn.on('close', (code, signal) => {
        t.equal(code, 0)
        t.equal(signal, null)
        r()
      })
    )
    t.not(Buffer.concat(warnErr).toString().trim(), '')
  })
}

switch (process.argv[2]) {
  case 'child':
    //@ts-ignore
    globalThis.AbortController = undefined
    //@ts-ignore
    globalThis.AbortSignal = undefined
    import('../').then(({ LRUCache }) => {
      new LRUCache({ max: 1, fetchMethod: async () => 1 }).fetch(1)
    })
    break
  case 'child-no-fetch':
    //@ts-ignore
    globalThis.AbortController = undefined
    //@ts-ignore
    globalThis.AbortSignal = undefined
    import('../')
    break
  default:
    main()
}
