Cache data in memory. After `cacheTime`, the data will be automatically deleted.

## API

```ts
class MemoryCache<Key = any, Data = any> extends EventEmitter {
  static DEFAULT_CACHE_TIME: number;
  static DEFAULT_MAX_CACHE_TIME: number;
  isReady(): boolean;
  asReady(): this;
  getMaxCacheTime(): number;
  setMaxCacheTime(maxCacheTime: number): this;
  getDefaultCacheTime(): number;
  setDefaultCacheTime(defaultCacheTime: number): this;
  memorize(
    key: Key,
    data: Data,
    options?: { cacheTime?: number; cacheTimestamp?: number }
  ): this;
  set(key: Key, data: Data, options?: { cacheTime?: number }): this;
  has(key: Key): boolean;
  get(key: Key): Data | undefined;
  getCacheTime(key: Key): number | undefined;
  getCacheTimestamp(key: Key): number | undefined;
  delete(key: Key): this;
  clear(): this;
}
```

### Statics

- **`DEFAULT_CACHE_TIME`:** Default cache time, value is `300000`.
- **`DEFAULT_MAX_CACHE_TIME`:** Default max cache time, value is `Number.MAX_SAFE_INTEGER`. When the `cacheTime` is greater than or equals to the max cache time, the delete timer will no be set, which means the cache is permanent.

### Events

- **`memoryCache.on("ready", () => {})`:** Ready event. MemoryCache is ready by default and this event will never be emitted. This event is mainly used when you build your own cache constructor which extends MemoryCache.
- **`memoryCache.on("set", (key, data) => {})`:** Set cache event.
- **`memoryCache.on("delete", (key, data) => {})`:** Delete cache event, including automatically delete.
- **`memoryCache.on("clear", () => {})`:** Clear event.

### Events for key

- **`memoryCache.for(key).on("set", (data) => {})`:** Set cache event. The `key` is cache key.
- **`memoryCache.for(key).on("delete", (data) => {})`:** Delete cache event. The `key` is cache key.

### Methods

- **`isReady()`:** Returns a boolean value indicates whether the cache is ready.
- **`asReady()`:** Make cache ready. If the cache is not ready, `"ready"` event will be emitted.
- **`getMaxCacheTime()`:** Get max cache time.
- **`setMaxCacheTime(maxCacheTime)`:** Set max cache time.
- **`getDefaultCacheTime()`:** Get default cache time.
- **`setDefaultCacheTime(defaultCacheTime)`:** Set default cache time.
- **`memorize(key, data[, options])`:** Set cache but no events emitted.
- **`set(key, data[, options])`:** Set cache and `"set"` events will be emitted.
- **`has(key)`:** Detect whether has the cache of the specied key.
- **`get(key)`:** Get cache data of the specied key. It may be `undefined`.
- **`getCacheTime(key)`:** Get cache time.
- **`getCacheTimestamp(key)`:** Returns the timestamp of the cache。
- **`delete(key)`:** Delete cache manually. Invoking this method will emit `"delete"` events.
- **`clear(key)`:** Clear all caches. It will emit `"clear"` event.

## Example

```ts
import { MemoryCache } from "@lilib/utils";

const cache = new MemoryCache();

cache.for("user").on("set", () => {
  // Do something.
});

fetch("/users/1").then((response) => {
  cache.memorize("user", response.json());
});

fetch("/users/1", {
  method: "POST",
  body: JSON.stringify({ name: "Vincent" }),
}).then((response) => {
  cache.set("user", response.json());
});
```
