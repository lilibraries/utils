Get constructor name of an instance.

## API

```ts
function getConstructorName(instance: any): string;
```

## Example

```ts
import { EventEmitter, getConstructorName } from "@lilib/utils";

const emitter = new EventEmitter();

console.log(getConstructorName(emitter));
// => "EventEmitter"
```
