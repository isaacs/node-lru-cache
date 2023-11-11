import { createRequire } from 'module'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const main = async () => {
  const { default: t } = await import('tap')
  const { spawn } = await import('child_process')

  // need to run both tests in parallel so we don't miss the close event
  t.jobs = 3

  const argv = process.execArgv.filter(
    a => !a.startsWith('--no-warnings')
  )
  const warn = spawn(
    process.execPath,
    [...argv, __filename, 'child'],
    {
      env: {
        ...process.env,
        NODE_OPTIONS: '',
      },
    }
  )
  const warnErr: Buffer[] = []
  warn.stderr.on('data', c => warnErr.push(c))

  const noWarn = spawn(
    process.execPath,
    [...argv, __filename, 'child'],
    {
      env: {
        ...process.env,
        LRU_CACHE_IGNORE_AC_WARNING: '1',
        NODE_OPTIONS: '',
      },
    }
  )
  const noWarnErr: Buffer[] = []
  noWarn.stderr.on('data', c => noWarnErr.push(c))

  const noFetch = spawn(
    process.execPath,
    [...argv, __filename, 'child-no-fetch'],
    {
      env: {
        ...process.env,
        NODE_OPTIONS: '',
      },
    }
  )
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
    t.notMatch(
      Buffer.concat(noWarnErr).toString().trim(),
      'NO_ABORT_CONTROLLER'
    )
  })

  t.test('no warning (because no fetch)', async t => {
    await new Promise<void>(r =>
      noFetch.on('close', (code, signal) => {
        t.equal(code, 0)
        t.equal(signal, null)
        r()
      })
    )
    t.notMatch(
      Buffer.concat(noWarnErr).toString().trim(),
      'NO_ABORT_CONTROLLER'
    )
  })

  t.test('warning', async t => {
    await new Promise<void>(r =>
      warn.on('close', (code, signal) => {
        t.equal(code, 0)
        t.equal(signal, null)
        r()
      })
    )
    t.match(
      Buffer.concat(warnErr).toString().trim(),
      /NO_ABORT_CONTROLLER/
    )
  })
}

switch (process.argv[2]) {
  case 'child':
    //@ts-expect-error
    process.emitWarning = null
    //@ts-expect-error
    globalThis.AbortController = undefined
    //@ts-expect-error
    globalThis.AbortSignal = undefined
    const req = createRequire(import.meta.url)
    const { LRUCache } = req('../dist/commonjs/index.js')
    new LRUCache({ max: 1, fetchMethod: async () => 1 }).fetch(1)
    break
  case 'child-no-fetch':
    //@ts-expect-error
    globalThis.AbortController = undefined
    //@ts-expect-error
    globalThis.AbortSignal = undefined
    import('../dist/esm/index.js')
    break
  default:
    main()
}
