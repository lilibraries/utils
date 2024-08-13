Detect whether a value is string.

## API

```ts
function isString(value: any): value is string;
```

## Example

```ts
import { isString } from "@lilib/utils";

isString("test");
// => true

isString(Symbol("test"));
// => false
```
