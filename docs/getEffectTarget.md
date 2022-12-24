---
title: getEffectTarget (React)
---

Get returned value of a function or referenced value of a React ref object. If the `target` parameter is neither a function nor a ref object, just return it directly. Note that, in a non browser environment, it always returns `null`.

## API

```ts
function getEffectTarget<T>(target: EffectTarget<T>): Nullable<T>;
```

For details about [`Nullable`](./types#nullable) and [`EffectTarget`](./types#effecttarget-react) types, see the [TypeScript utils](./types) documentation.

## Example

```tsx
import React, { useRef, useEffect } from "react";
import { getEffectTarget } from "@lilib/utils";

function Example() {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = getEffectTarget(domRef);
    // Do something.
  }, []);

  return <div ref={domRef}>...</div>;
}
```
