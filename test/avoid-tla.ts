// This is so annoying.
// even if you ship as ESM, node programs will try to require() it,
// which breaks when TLA is in use. So, effectively, rather than just
// not supporting top level await, node DOES support it, but in a way
// that throws a hand grenade at unsuspecting downstream users.
// Great.
import t from 'tap'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
t.doesNotThrow(() => require('../dist/esm/node/index.js'))
