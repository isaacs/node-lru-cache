/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/inspect.js TAP > output 1`] = `
LRUCache {
  [Symbol(max)]: Infinity,
  [Symbol(lengthCalculator)]: [Function: naiveLength],
  [Symbol(allowStale)]: false,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]: Map {},
  [Symbol(lruList)]: Yallist { tail: null, head: null, length: 0 },
  [Symbol(length)]: 0 }
`

exports[`test/inspect.js TAP > output 2`] = `
LRUCache {}
`

exports[`test/inspect.js TAP > output 3`] = `
LRUCache {
  [Symbol(max)]: 10,
  [Symbol(lengthCalculator)]: [Function: naiveLength],
  [Symbol(allowStale)]: false,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]: Map {},
  [Symbol(lruList)]: Yallist { tail: null, head: null, length: 0 },
  [Symbol(length)]: 0 }
`

exports[`test/inspect.js TAP > output 4`] = `
LRUCache {
  max: 10
}
`

exports[`test/inspect.js TAP > output 5`] = `
LRUCache {
  [Symbol(max)]: 10,
  [Symbol(lengthCalculator)]: [Function: naiveLength],
  [Symbol(allowStale)]: false,
  [Symbol(maxAge)]: 50,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]: Map {},
  [Symbol(lruList)]: Yallist { tail: null, head: null, length: 0 },
  [Symbol(length)]: 0 }
`

exports[`test/inspect.js TAP > output 6`] = `
LRUCache {
  max: 10,
  maxAge: 50
}
`

exports[`test/inspect.js TAP > output 7`] = `
LRUCache {
  [Symbol(max)]: 10,
  [Symbol(lengthCalculator)]: [Function: naiveLength],
  [Symbol(allowStale)]: false,
  [Symbol(maxAge)]: 50,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     { foo: 'bar' } => Node {
       list: Yallist { tail: [Circular], head: [Circular], length: 1 },
       value:
        Entry {
          key: { foo: 'bar' },
          value: 'baz',
          length: 1,
          now: {time},
          maxAge: 50 },
       prev: null,
       next: null } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: { foo: 'bar' },
           value: 'baz',
           length: 1,
           now: {time},
           maxAge: 50 },
        prev: null,
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: { foo: 'bar' },
           value: 'baz',
           length: 1,
           now: {time},
           maxAge: 50 },
        prev: null,
        next: null },
     length: 1 },
  [Symbol(length)]: 1 }
`

exports[`test/inspect.js TAP > output 8`] = `
LRUCache {
  max: 10,
  maxAge: 50,

  { foo: 'bar' } => { value: 'baz' }
}
`

exports[`test/inspect.js TAP > output 9`] = `
LRUCache {
  [Symbol(max)]: 10,
  [Symbol(lengthCalculator)]: [Function: naiveLength],
  [Symbol(allowStale)]: false,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     { foo: 'bar' } => Node {
       list:
        Yallist {
          tail: [Circular],
          head:
           Node {
             list: [Circular],
             value:
              Entry {
                key: 1,
                value: { a: { b: { c: { d: { e: { f: {} } } } } } },
                length: 1,
                now: {time},
                maxAge: 0 },
             prev: null,
             next: [Circular] },
          length: 2 },
       value:
        Entry {
          key: { foo: 'bar' },
          value: 'baz',
          length: 1,
          now: {time},
          maxAge: 50 },
       prev:
        Node {
          list: Yallist { tail: [Circular], head: [Circular], length: 2 },
          value:
           Entry {
             key: 1,
             value: { a: { b: { c: { d: { e: { f: {} } } } } } },
             length: 1,
             now: {time},
             maxAge: 0 },
          prev: null,
          next: [Circular] },
       next: null },
     1 => Node {
       list:
        Yallist {
          tail:
           Node {
             list: [Circular],
             value:
              Entry {
                key: { foo: 'bar' },
                value: 'baz',
                length: 1,
                now: {time},
                maxAge: 50 },
             prev: [Circular],
             next: null },
          head: [Circular],
          length: 2 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 1,
          now: {time},
          maxAge: 0 },
       prev: null,
       next:
        Node {
          list: Yallist { tail: [Circular], head: [Circular], length: 2 },
          value:
           Entry {
             key: { foo: 'bar' },
             value: 'baz',
             length: 1,
             now: {time},
             maxAge: 50 },
          prev: [Circular],
          next: null } } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: { foo: 'bar' },
           value: 'baz',
           length: 1,
           now: {time},
           maxAge: 50 },
        prev:
         Node {
           list: [Circular],
           value:
            Entry {
              key: 1,
              value: { a: { b: { c: { d: { e: { f: {} } } } } } },
              length: 1,
              now: {time},
              maxAge: 0 },
           prev: null,
           next: [Circular] },
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 1,
           now: {time},
           maxAge: 0 },
        prev: null,
        next:
         Node {
           list: [Circular],
           value:
            Entry {
              key: { foo: 'bar' },
              value: 'baz',
              length: 1,
              now: {time},
              maxAge: 50 },
           prev: [Circular],
           next: null } },
     length: 2 },
  [Symbol(length)]: 2 }
`

exports[`test/inspect.js TAP > output 10`] = `
LRUCache {
  max: 10,

  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } } },
  { foo: 'bar' } => { value: 'baz', maxAge: 50 }
}
`

exports[`test/inspect.js TAP > output 11`] = `
LRUCache {
  [Symbol(max)]: 10,
  [Symbol(lengthCalculator)]: [Function: naiveLength],
  [Symbol(allowStale)]: true,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     { foo: 'bar' } => Node {
       list:
        Yallist {
          tail: [Circular],
          head:
           Node {
             list: [Circular],
             value:
              Entry {
                key: 1,
                value: { a: { b: { c: { d: { e: { f: {} } } } } } },
                length: 1,
                now: {time},
                maxAge: 0 },
             prev: null,
             next: [Circular] },
          length: 2 },
       value:
        Entry {
          key: { foo: 'bar' },
          value: 'baz',
          length: 1,
          now: {time},
          maxAge: 50 },
       prev:
        Node {
          list: Yallist { tail: [Circular], head: [Circular], length: 2 },
          value:
           Entry {
             key: 1,
             value: { a: { b: { c: { d: { e: { f: {} } } } } } },
             length: 1,
             now: {time},
             maxAge: 0 },
          prev: null,
          next: [Circular] },
       next: null },
     1 => Node {
       list:
        Yallist {
          tail:
           Node {
             list: [Circular],
             value:
              Entry {
                key: { foo: 'bar' },
                value: 'baz',
                length: 1,
                now: {time},
                maxAge: 50 },
             prev: [Circular],
             next: null },
          head: [Circular],
          length: 2 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 1,
          now: {time},
          maxAge: 0 },
       prev: null,
       next:
        Node {
          list: Yallist { tail: [Circular], head: [Circular], length: 2 },
          value:
           Entry {
             key: { foo: 'bar' },
             value: 'baz',
             length: 1,
             now: {time},
             maxAge: 50 },
          prev: [Circular],
          next: null } } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: { foo: 'bar' },
           value: 'baz',
           length: 1,
           now: {time},
           maxAge: 50 },
        prev:
         Node {
           list: [Circular],
           value:
            Entry {
              key: 1,
              value: { a: { b: { c: { d: { e: { f: {} } } } } } },
              length: 1,
              now: {time},
              maxAge: 0 },
           prev: null,
           next: [Circular] },
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 1,
           now: {time},
           maxAge: 0 },
        prev: null,
        next:
         Node {
           list: [Circular],
           value:
            Entry {
              key: { foo: 'bar' },
              value: 'baz',
              length: 1,
              now: {time},
              maxAge: 50 },
           prev: [Circular],
           next: null } },
     length: 2 },
  [Symbol(length)]: 2 }
`

exports[`test/inspect.js TAP > output 12`] = `
LRUCache {
  allowStale: true,
  max: 10,

  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } } },
  { foo: 'bar' } => { value: 'baz', maxAge: 50 }
}
`

exports[`test/inspect.js TAP > output 13`] = `
LRUCache {
  [Symbol(max)]: 10,
  [Symbol(lengthCalculator)]: [Function: naiveLength],
  [Symbol(allowStale)]: true,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     { foo: 'bar' } => Node {
       list:
        Yallist {
          tail: [Circular],
          head:
           Node {
             list: [Circular],
             value:
              Entry {
                key: 1,
                value: { a: { b: { c: { d: { e: { f: {} } } } } } },
                length: 1,
                now: {time},
                maxAge: 0 },
             prev: null,
             next: [Circular] },
          length: 2 },
       value:
        Entry {
          key: { foo: 'bar' },
          value: 'baz',
          length: 1,
          now: {time},
          maxAge: 50 },
       prev:
        Node {
          list: Yallist { tail: [Circular], head: [Circular], length: 2 },
          value:
           Entry {
             key: 1,
             value: { a: { b: { c: { d: { e: { f: {} } } } } } },
             length: 1,
             now: {time},
             maxAge: 0 },
          prev: null,
          next: [Circular] },
       next: null },
     1 => Node {
       list:
        Yallist {
          tail:
           Node {
             list: [Circular],
             value:
              Entry {
                key: { foo: 'bar' },
                value: 'baz',
                length: 1,
                now: {time},
                maxAge: 50 },
             prev: [Circular],
             next: null },
          head: [Circular],
          length: 2 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 1,
          now: {time},
          maxAge: 0 },
       prev: null,
       next:
        Node {
          list: Yallist { tail: [Circular], head: [Circular], length: 2 },
          value:
           Entry {
             key: { foo: 'bar' },
             value: 'baz',
             length: 1,
             now: {time},
             maxAge: 50 },
          prev: [Circular],
          next: null } } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: { foo: 'bar' },
           value: 'baz',
           length: 1,
           now: {time},
           maxAge: 50 },
        prev:
         Node {
           list: [Circular],
           value:
            Entry {
              key: 1,
              value: { a: { b: { c: { d: { e: { f: {} } } } } } },
              length: 1,
              now: {time},
              maxAge: 0 },
           prev: null,
           next: [Circular] },
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 1,
           now: {time},
           maxAge: 0 },
        prev: null,
        next:
         Node {
           list: [Circular],
           value:
            Entry {
              key: { foo: 'bar' },
              value: 'baz',
              length: 1,
              now: {time},
              maxAge: 50 },
           prev: [Circular],
           next: null } },
     length: 2 },
  [Symbol(length)]: 2 }
`

exports[`test/inspect.js TAP > output 14`] = `
LRUCache {
  allowStale: true,
  max: 10,

  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } } },
  { foo: 'bar' } => { value: 'baz', maxAge: 50, stale: true }
}
`

exports[`test/inspect.js TAP > output 15`] = `
LRUCache {
  [Symbol(max)]: 10,
  [Symbol(lengthCalculator)]: [Function: naiveLength],
  [Symbol(allowStale)]: true,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     1 => Node {
       list: Yallist { tail: [Circular], head: [Circular], length: 1 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 1,
          now: {time},
          maxAge: 0 },
       prev: null,
       next: null } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 1,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 1,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     length: 1 },
  [Symbol(length)]: 1 }
`

exports[`test/inspect.js TAP > output 16`] = `
LRUCache {
  allowStale: true,
  max: 10,

  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } } }
}
`

exports[`test/inspect.js TAP > output 17`] = `
LRUCache {
  [Symbol(max)]: 10,
  [Symbol(lengthCalculator)]: [Function],
  [Symbol(allowStale)]: true,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     1 => Node {
       list: Yallist { tail: [Circular], head: [Circular], length: 1 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 5,
          now: {time},
          maxAge: 0 },
       prev: null,
       next: null } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     length: 1 },
  [Symbol(length)]: 5 }
`

exports[`test/inspect.js TAP > output 18`] = `
LRUCache {
  allowStale: true,
  max: 10,
  length: 5,

  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } },
    length: 5 }
}
`

exports[`test/inspect.js TAP > output 19`] = `
LRUCache {
  [Symbol(max)]: Infinity,
  [Symbol(lengthCalculator)]: [Function],
  [Symbol(allowStale)]: true,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     1 => Node {
       list: Yallist { tail: [Circular], head: [Circular], length: 1 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 5,
          now: {time},
          maxAge: 0 },
       prev: null,
       next: null } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     length: 1 },
  [Symbol(length)]: 5 }
`

exports[`test/inspect.js TAP > output 20`] = `
LRUCache {
  allowStale: true,
  length: 5,

  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } },
    length: 5 }
}
`

exports[`test/inspect.js TAP > output 21`] = `
LRUCache {
  [Symbol(max)]: Infinity,
  [Symbol(lengthCalculator)]: [Function],
  [Symbol(allowStale)]: true,
  [Symbol(maxAge)]: 100,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     1 => Node {
       list: Yallist { tail: [Circular], head: [Circular], length: 1 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 5,
          now: {time},
          maxAge: 0 },
       prev: null,
       next: null } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     length: 1 },
  [Symbol(length)]: 5 }
`

exports[`test/inspect.js TAP > output 22`] = `
LRUCache {
  allowStale: true,
  maxAge: 100,
  length: 5,

  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } },
    maxAge: 0,
    length: 5 }
}
`

exports[`test/inspect.js TAP > output 23`] = `
LRUCache {
  [Symbol(max)]: Infinity,
  [Symbol(lengthCalculator)]: [Function],
  [Symbol(allowStale)]: false,
  [Symbol(maxAge)]: 100,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     1 => Node {
       list: Yallist { tail: [Circular], head: [Circular], length: 1 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 5,
          now: {time},
          maxAge: 0 },
       prev: null,
       next: null } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     length: 1 },
  [Symbol(length)]: 5 }
`

exports[`test/inspect.js TAP > output 24`] = `
LRUCache {
  maxAge: 100,
  length: 5,

  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } },
    maxAge: 0,
    length: 5 }
}
`

exports[`test/inspect.js TAP > output 25`] = `
LRUCache {
  [Symbol(max)]: Infinity,
  [Symbol(lengthCalculator)]: [Function],
  [Symbol(allowStale)]: false,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     1 => Node {
       list: Yallist { tail: [Circular], head: [Circular], length: 1 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 5,
          now: {time},
          maxAge: 0 },
       prev: null,
       next: null } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 5,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     length: 1 },
  [Symbol(length)]: 5 }
`

exports[`test/inspect.js TAP > output 26`] = `
LRUCache {
  length: 5,

  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } },
    length: 5 }
}
`

exports[`test/inspect.js TAP > output 27`] = `
LRUCache {
  [Symbol(max)]: Infinity,
  [Symbol(lengthCalculator)]: [Function: naiveLength],
  [Symbol(allowStale)]: false,
  [Symbol(maxAge)]: 0,
  [Symbol(dispose)]: undefined,
  [Symbol(noDisposeOnSet)]: false,
  [Symbol(cache)]:
   Map {
     1 => Node {
       list: Yallist { tail: [Circular], head: [Circular], length: 1 },
       value:
        Entry {
          key: 1,
          value: { a: { b: { c: { d: { e: { f: {} } } } } } },
          length: 1,
          now: {time},
          maxAge: 0 },
       prev: null,
       next: null } },
  [Symbol(lruList)]:
   Yallist {
     tail:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 1,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     head:
      Node {
        list: [Circular],
        value:
         Entry {
           key: 1,
           value: { a: { b: { c: { d: { e: { f: {} } } } } } },
           length: 1,
           now: {time},
           maxAge: 0 },
        prev: null,
        next: null },
     length: 1 },
  [Symbol(length)]: 1 }
`

exports[`test/inspect.js TAP > output 28`] = `
LRUCache {
  1 => { value: { a: { b: { c: { d: { e: { f: {} } } } } } } }
}
`
