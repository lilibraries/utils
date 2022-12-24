Merge the defined properties of multiple objects. It does not modify the original objects and returns a new object.

## API

```ts
function mergeWithDefined<T extends object>(...args: Partial<T>[]): T;
```

## Example

```ts
import { mergeWithDefined } from "@lilib/utils";

mergeWithDefined(
  { a: "a", b: "b", c: "c" },
  { a: "a1", b: undefined },
  { d: "d", e: undefined }
);
// => { a: "a1", b: "b", c: "c", d: "d", e: undefined }
```
