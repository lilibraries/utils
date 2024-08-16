Detect whether an array is empty.

## API

```ts
function isEmptyArray(value: any): value is [];
```

## Example

```ts
import { isEmptyArray } from "@lilib/utils";

isEmptyArray([]);
// => true

isEmptyArray([""]);
// => false
```
