---
title: composeRefs (React)
---

Compose multiple React refs into one.

## API

```ts
function composeRefs<T>(...refs: React.Ref<T>[]): React.RefCallback<T>;
```

## Example

```tsx
import React, { forwardRef } from "react";
import { composeRefs } from "@lilib/utils";

const Button = forwardRef<HTMLButtonElement, any>((props, ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const composedRef = composeRefs(buttonRef, ref);

  // ...

  return <button ref={composedRef}>{props.children}</button>;
});
```
