export {}
const main = async () => {
  const { default: t } = await import('tap')
  const { spawn } = await import('child_process')

  // need to run both tests in parallel so we don't miss the close event
  t.jobs = 2

  const warn = spawn('ts-node', [__filename, 'child'])
  const warnErr: Buffer[] = []
  warn.stderr.on('data', c => warnErr.push(c))

  const noWarn = spawn('ts-node', [__filename, 'child'], {
    env: {
      ...process.env,
      LRU_CACHE_IGNORE_AC_WARNING: '1',
    },
  })
  const noWarnErr: Buffer[] = []
  noWarn.stderr.on('data', c => noWarnErr.push(c))

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
    import('../')
    break
  default:
    main()
}
