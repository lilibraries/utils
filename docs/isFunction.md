Detect whether a value is function.

## API

```ts
function isFunction(value: any): value is (...args: any[]) => any;
```

## Example

```ts
import { isFunction } from "@lilib/utils";

isFunction({});
// => false

isFunction(function () {});
// => true
```
