# cringe lorg

## 11.1

- Add the `onInsert` method

## 11.0

- Drop support for node less than v20

## 10.4

- Accidental minor update, should've been patch.

## 10.3

- add `forceFetch()` method
- set `disposeReason` to `'expire'` when it's the result of a TTL
  expiration, or `'fetch'` when it's the result of an aborted
  or `undefined`-returning `fetch()`
- add `memo()` method

## 10.2

- types: implement the `Map<K, V>` interface

## 10.1

- add `cache.info(key)` to get value as well as ttl and size
  information.

## 10.0

- `cache.fetch()` return type is now `Promise<V | undefined>`
  instead of `Promise<V | void>`. This is an irrelevant change
  practically speaking, but can require changes for TypeScript
  users.

## 9.1

- `cache.set(key, undefined)` is now an alias for
  `cache.delete(key)`

## 9.0

- Use named export only, no default export.
- Bring back minimal polyfill. If this polyfill ends up being
  used, then a warning is printed, as it is not safe for use
  outside of LRUCache.

## 8.0

- The `fetchContext` option was renamed to `context`, and may no
  longer be set on the cache instance itself.
- Rewritten in TypeScript, so pretty much all the types moved
  around a lot.
- The AbortController/AbortSignal polyfill is removed. For this
  reason, **Node version 16.14.0 or higher is now required**.
- Internal properties were moved to actual private class
  properties.
- Keys and values must not be `null` or `undefined`.
- Minified export available at `'lru-cache/min'`, for both CJS
  and MJS builds.

## 7.18

- Add support for internal state investigation through the use of
  a `status` option to `has()`, `set()`, `get()`, and `fetch()`.

## 7.17

- Add `signal` option for `fetch` to pass a user-supplied
  AbortSignal
- Add `ignoreFetchAbort` and `allowStaleOnFetchAbort` options

## 7.16.2

- Fail fetch() promises when they are aborted

## 7.16

- Add `allowStaleOnFetchRejection` option

## 7.15

- Provide both ESM and CommonJS exports

## 7.14

- Add `maxEntrySize` option to prevent caching items above a
  given calculated size.

## 7.13

- Add `forceRefresh` option to trigger a call to the
  `fetchMethod` even if the item is found in cache, and not
  older than its `ttl`.

## 7.12

- Add `fetchContext` option to provide additional information to
  the `fetchMethod`
- 7.12.1: Fix bug where adding an item with size greater than
  `maxSize` would cause bizarre behavior.

## 7.11

- Add 'noDeleteOnStaleGet' option, to suppress behavior where a
  `get()` of a stale item would remove it from the cache.

## 7.10

- Add `noDeleteOnFetchRejection` option, to suppress behavior
  where a failed `fetch` will delete a previous stale value.
- Ship types along with the package, rather than relying on
  out of date types coming from DefinitelyTyped.

## 7.9

- Better AbortController polyfill, supporting
  `signal.addEventListener('abort')` and `signal.onabort`.
- (7.9.1) Drop item from cache instead of crashing with an
  `unhandledRejection` when the `fetchMethod` throws an error or
  returns a rejected Promise.

## 7.8

- add `updateAgeOnHas` option
- warnings sent to `console.error` if `process.emitWarning` unavailable

## 7.7

- fetch: provide options and abort signal

## 7.6

- add cache.getRemainingTTL(key)
- Add async cache.fetch() method, fetchMethod option
- Allow unbounded storage if maxSize or ttl set

## 7.5

- defend against mutation while iterating
- Add rentries, rkeys, rvalues
- remove bundler and unnecessary package.json fields

## 7.4

- Add browser optimized webpack bundle, exposed as `'lru-cache/browser'`
- Track size of compiled bundle in CI ([@SuperOleg39](https://github.com/SuperOleg39))
- Add `noUpdateTTL` option for `set()`

## 7.3

- Add `disposeAfter()`
- `set()` returns the cache object
- `delete()` returns boolean indicating whether anything was deleted

## 7.2

- Add reason to dispose() calls.

## 7.1

- Add `ttlResolution` option
- Add `ttlAutopurge` option

## 7.0 - 2022-02

This library changed to a different algorithm and internal data structure
in version 7, yielding significantly better performance, albeit with
some subtle changes as a result.

If you were relying on the internals of LRUCache in version 6 or before, it
probably will not work in version 7 and above.

### Specific API Changes

For the most part, the feature set has been maintained as much as possible.

However, some other cleanup and refactoring changes were made in v7 as
well.

- The `set()`, `get()`, and `has()` functions take options objects
  instead of positional booleans/integers for optional parameters.
- `size` can be set explicitly on `set()`.
- `cache.length` was renamed to the more fitting `cache.size`.
- Deprecations:
  - `stale` option -> `allowStale`
  - `maxAge` option -> `ttl`
  - `length` option -> `sizeCalculation`
  - `length` property -> `size`
  - `del()` method -> `delete()`
  - `prune()` method -> `purgeStale()`
  - `reset()` method -> `clear()`
- The objects used by `cache.load()` and `cache.dump()` are incompatible
  with previous versions.
- `max` and `maxSize` are now two separate options. (Previously, they were
  a single `max` option, which would be based on either count or computed
  size.)
- The function assigned to the `dispose` option is now expected to have signature
  `(value, key, reason)` rather than `(key, value)`, reversing the order of
  `value` and `key`.

## v6 - 2020-07

- Drop support for node v8 and earlier

## v5 - 2018-11

- Add updateAgeOnGet option
- Guards around setting max/maxAge to non-numbers
- Use classes, drop support for old nodes

## v4 - 2015-12

- Improve performance
- add noDisposeOnSet option
- feat(prune): allow users to proactively prune old entries
- Use Symbols for private members
- Add maxAge setter/getter

## v3 - 2015-11

- Add cache.rforEach
- Allow non-string keys

## v2 - 2012-08

- add cache.pop()
- add cache.peek()
- add cache.keys()
- add cache.values()
- fix memory leak
- add `stale` option to return stale values before deleting
- use null-prototype object to avoid hazards
- make options argument an object

## v1 - 2010-05

- initial implementation
