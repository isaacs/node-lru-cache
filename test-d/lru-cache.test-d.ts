import LRUCache from "../";
import type { DisposeReason, Options } from "../";
import { expectType, expectError, expectDeprecated } from "tsd";

const user1 = { id: 1, name: "John Smith" };
type TRecord = typeof user1;

const ops: Options<string, TRecord> = {
  max: 10,
  maxSize: 100,
  sizeCalculation(val) {
    return val.name.length;
  },
  dispose(value, key, reason) {
    void value.id;
  },
  disposeAfter(value, key, reason) {},
  noDisposeOnSet: false,
  ttl: 1000,
  ttlResolution: 1,
  maxAge: 1000,
  noUpdateTTL: false,
  ttlAutopurge: false,
  allowStale: false,
  updateAgeOnGet: false,
};

const userCache = new LRUCache<string, TRecord>(ops);
expectType<LRUCache<string, TRecord>>(userCache);

/**
 * Validate the signature of the public API
 */
expectType<(v: TRecord, k: string) => number>(userCache.sizeCalculation);

expectType<number>(userCache.max);
expectError((userCache.max = 1));

expectType<number>(userCache.maxSize);
expectError((userCache.maxSize = false));

expectType<boolean>(userCache.allowStale);
expectError((userCache.allowStale = false));

expectType<boolean>(userCache.noDisposeOnSet);
expectError((userCache.noDisposeOnSet = false));

expectType<boolean>(userCache.updateAgeOnGet);
expectError((userCache.updateAgeOnGet = false));

expectType<(value: TRecord, key: string) => number>(userCache.sizeCalculation);
expectError((userCache.sizeCalculation = () => 0));

expectType<(value: TRecord, k: string, reason: DisposeReason) => void>(userCache.dispose);

expectType<number>(userCache.size);
expectError((userCache.size = 1));

expectType<number>(userCache.ttl);
expectError((userCache.ttl = 1));

expectType<LRUCache<string, TRecord>>(userCache.set("foo", user1, { ttl: 5, noDisposeOnSet: true, size: 12 }));
expectError(userCache.set({}, user1));

expectType<TRecord | undefined>(userCache.find((v, k, cache) => v.id === 1));

expectError(userCache.set(1, user1));
expectError(userCache.set("foo", 1));

expectType<TRecord | undefined>(userCache.get("foo"));
expectError(userCache.get(1));

expectType<TRecord | undefined>(userCache.peek("foo"));
expectError(userCache.peek(1));

expectType<boolean>(userCache.has("foo"));
expectError(userCache.has(1));

expectType<boolean>(userCache.delete("foo"));
expectError(userCache.delete(1));

expectType<boolean>(userCache.purgeStale());

expectType<Iterable<string>>(userCache.keys());
expectType<Iterable<TRecord>>(userCache.values());
expectType<TRecord | undefined>(userCache.pop());

userCache.forEach((value, key, cache) => {
  console.log(value.name);
});

/**
 * Ensure deprecations
 */
expectDeprecated(userCache.reset);
expectDeprecated(userCache.prune);
expectDeprecated(ops.maxAge);

/**
 * Validate dump/load
 */
expectType<Array<[string, { value: TRecord; size?: number; ttl?: number }]>>(userCache.dump());
expectError(userCache.load([["key", "value"]]));
