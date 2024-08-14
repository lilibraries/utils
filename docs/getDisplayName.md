---
title: getDisplayName (React)
---

Get React component display name.

## API

```ts
function getDisplayName(value: any): string;
```

## Example

```tsx
import { getDisplayName } from "@lilib/utils";

function Example() {}
Example.displayName = "ExampleComponent";

console.log(getDisplayName(Example));
// => "ExampleComponent"
```
