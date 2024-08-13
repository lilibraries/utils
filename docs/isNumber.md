Detect whether a value is number.

## API

```ts
function isNumber(value: any): value is number;
```

## Example

```ts
import { isNumber } from "@lilib/utils";

isNumber(0);
// => true

isNumber("0");
// => false
```
