Detect whether an object is [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

## API

```ts
function isEventTarget(target: any): target is EventTarget;
```

## Example

```ts
import { isEventTarget } from "@lilib/utils";

if (isEventTarget(element)) {
  element.addEventListener("click", () => {
    // Do something.
  });
}
```
