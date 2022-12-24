Detect whether multiple arrays are shallow equal.

## API

```ts
function areArraysEqual(
  x: readonly any[],
  y: readonly any[],
  ...args: (readonly any[])[]
): boolean;
```

## Example

```ts
import { areArraysEqual } from "@lilib/utils";

areArraysEqual([1, 2, 3], [1, 2, 3], [1, 2, 3]);
// => true
```
