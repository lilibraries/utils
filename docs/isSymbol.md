Detect whether a value is symbol.

## API

```ts
function isSymbol(value: any): value is symbol;
```

## Example

```ts
import { isSymbol } from "@lilib/utils";

isSymbol("test");
// => false

isSymbol(Symbol("test"));
// => true
```
