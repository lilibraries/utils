Detect whether a value is object.

## API

```ts
function isObject(value: any): value is object;
```

## Example

```ts
import { isObject } from "@lilib/utils";

isObject({});
// => true

isObject(null);
// => false
```
