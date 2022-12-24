This event emitter supports child emitters by using `.for()` method.

## API

```ts
type Name = string | symbol;
type Listener = (...args: any[]) => void;

class EventEmitter {
  static DEFAULT_MAX_LISTENERS: number; // Value is 100
  getMaxListeners(): number;
  setMaxListeners(count: number): this;
  for(key: any): EventEmitter;
  on(name: Name, listener: Listener): this;
  once(name: Name, listener: Listener): this;
  off(name: Name, listener: Listener): this;
  emit(name: Name, ...args: any[]): this;
  getEventNames(): Name[];
  getListeners(name: Name): Listener[];
  getListenersCount(name?: Name): number;
  removeAllListeners(name?: Name): this;
}
```

## Example

```ts
import { EventEmitter } from "@lilib/utils";

const emitter = new EventEmitter();
const listener = () => {};

emitter.on("name", listener);
emitter.once("once", listener);
emitter.off("name", listener);
emitter.emit("name", "data");

emitter.for("any data type").on("name", listener);
emitter.for("child").for("grandchild").on("name", listener);
emitter.for("child").for("grandchild").emit("name", "some data");
```
