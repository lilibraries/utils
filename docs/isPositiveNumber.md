Detect whether a number is positive.

## API

```ts
function isPositiveNumber(value: unknown): boolean;
```

## Example

```ts
import { isPositiveNumber } from "@lilib/utils";

isPositiveNumber(1);
// => true

isPositiveNumber(0);
// => false

isPositiveNumber(-1);
// => false
```
