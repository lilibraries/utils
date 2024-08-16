Detect whether a value can be CSS value.

## API

```ts
function isCSSValue(value: any): value is string | number;
```

## Example

```ts
import { isCSSValue } from "@lilib/utils";

isCSSValue(0);
isCSSValue("");
// => true

isCSSValue(NaN);
isCSSValue(null);
// => false
```
