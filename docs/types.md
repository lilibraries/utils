---
title: TypeScript utils
---

## Nullable

A type can be `null` and `undefined`.

```ts
Nullable<string>; // string | null | undefined
```

## PromiseResolve

Get promise resolved type.

```ts
PromiseResolve<Promise<string>>; // string
```

## EffectTarget (React)

```ts
type EffectTarget<T> =
  | Nullable<T>
  | (() => Nullable<T>)
  | { current: Nullable<T> };
```
