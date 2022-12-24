Detect whether the document is visible. In a non browser environment, it always returns true.

## API

```ts
function isPageVisible(): boolean;
```

## Example

```ts
import { isPageVisible } from "@lilib/utils";

if (isPageVisible()) {
  // Do something.
}
```
