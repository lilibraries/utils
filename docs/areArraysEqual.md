Detect whether multiple arrays are shallow equal.

## API

```ts
function areArraysEqual(x: any[], y: any[], ...args: any[][]): boolean;
```

## Example

```ts
import { areArraysEqual } from "@lilib/utils";

areArraysEqual([1, 2, 3], [1, 2, 3], [1, 2, 3]);
// => true

areArraysEqual([1, 2, 3], [1, 2, 3], [2, 3, 4]);
// => false
```
