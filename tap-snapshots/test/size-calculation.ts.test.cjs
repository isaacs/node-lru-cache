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
    "set": "add",
    "totalCalculatedSize": 2,
  },
  Object {
    "maxEntrySizeExceeded": true,
    "set": "miss",
  },
  Object {
    "entrySize": 3,
    "set": "add",
    "totalCalculatedSize": 3,
  },
  Object {
    "maxEntrySizeExceeded": true,
    "set": "miss",
  },
]
`

exports[`test/size-calculation.ts > TAP > large item falls out of cache, sizes are kept correct > status updates 1`] = `
Array [
  Object {
    "entrySize": 2,
    "set": "add",
    "totalCalculatedSize": 2,
  },
  Object {
    "maxEntrySizeExceeded": true,
    "set": "miss",
  },
  Object {
    "entrySize": 3,
    "set": "add",
    "totalCalculatedSize": 3,
  },
  Object {
    "maxEntrySizeExceeded": true,
    "set": "miss",
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
