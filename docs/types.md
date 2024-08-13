---
title: TypeScript utils
---

## Nullable

A type can be `null` and `undefined`.

```ts
Nullable<string>; // string | null | undefined
```

## EffectTarget (React)

```ts
type EffectTarget<T> =
  | Nullable<T>
  | (() => Nullable<T>)
  | { current: Nullable<T> };
```
