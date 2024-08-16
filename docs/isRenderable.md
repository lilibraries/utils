---
title: isRenderable (React)
---

Detect whether a React node is renderable. It can't be null, undefined, boolean and empty array. If the node is a non-empty array, only one item is renderable, the node is renderable.

## API

```ts
function isRenderable<T = any>(
  node: T
): node is Exclude<T, null | undefined | boolean>;
```

## Example

```tsx
import { isRenderable } from "@lilib/utils";

isRenderable(0);
isRenderable("");
isRenderable(<div />);
isRenderable([0, null]);
// => true

isRenderable([]);
isRenderable(true);
isRenderable(false);
isRenderable(null);
isRenderable(undefined);
isRenderable([null, null]);
// => false
```
