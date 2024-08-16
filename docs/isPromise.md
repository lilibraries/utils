Detect whether a object is Promise.

## API

```ts
function isPromise(value: any): value is Promise<any>;
```

## Example

```ts
import { isPromise } from "@lilib/utils";

isPromise(new Promise(() => {}));
// => true

isPromise({});
// => false
```
