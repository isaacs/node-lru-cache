/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/size-calculation.ts > TAP > large item falls out of cache because maxEntrySize > status updates 1`] = `
Array [
  Object {
    "entrySize": 2,
    "key": 2,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 2,
    "value": 2,
  },
  Object {
    "key": 1,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 1,
  },
  Object {
    "entrySize": 3,
    "key": 3,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 3,
    "value": 3,
  },
  Object {
    "key": 4,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 4,
  },
]
`

exports[`test/size-calculation.ts > TAP > large item falls out of cache, sizes are kept correct > status updates 1`] = `
Array [
  Object {
    "entrySize": 2,
    "key": 2,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 2,
    "value": 2,
  },
  Object {
    "key": 1,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 1,
  },
  Object {
    "entrySize": 3,
    "key": 3,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 3,
    "value": 3,
  },
  Object {
    "key": 4,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 4,
  },
]
`

exports[`test/size-calculation.ts > TAP > store strings, size = length > dump 1`] = `
Array [
  Array [
    "repeated",
    Object {
      "size": 10,
      "value": "jjjjjjjjjj",
    },
  ],
]
`
