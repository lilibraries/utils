Print warning message in the development environment. In production environment, do nothing. This module use `process.env.NODE_ENV` to distinguish environments, so your build tool needs to support `process.env.NODE_ENV` environment variable.

## API

```ts
warning(condition, message[, options])
warning.once(condition, message[, options])
warning.deprecated(condition, message[, options])
```

- **`condition`:** Warning condition. Print message only when this parameter is `true`.
- **`message`:** A formatted string that supports variables, such as `"This is a message contains {variable}"`.
- **`options`:** Options object.
  - **`options.label`:** Warning message label. Default is `"Warning"`. `warning.deprecated`'s label is `"Deprecated"`.
  - **`options.scope`:** `scope` is next to the `label` and wrapped in parentheses. For example, `scope: "Scope"`, the message is started with `"Warning(Scope): "`.
  - **`options.printer`:** Print function. Default is `console.error`.
  - **`options.variables`:** An object contains variables in `message`. ie. `{ variable: "value" }`.
  - **`options.deduplicated`:** When this option is `true`, a same message will be printed only once. It is `true` by default when using `warning.once` and `warning.deprecated`.
  - **`options.warnedMessages`:** An object that saves printed messages. ie. `{ "Already printed message": true }`.

## Example

```ts
import { warning } from "@lilib/utils";

warning(
  true,
  "More than {count} {eventName} events are listened to, which may lead to memory leaks.",
  {
    scope: "EventEmitter",
    variables: {
      count: 100,
      eventName: "click",
    },
  }
);
// => "Warning(EventEmitter): More than 100 click events are listened to, which may lead to memory leaks."
```
