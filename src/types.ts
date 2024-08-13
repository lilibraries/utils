export type Nullable<T> = T | undefined | null;

export type EffectTarget<T> =
  | Nullable<T>
  | (() => Nullable<T>)
  | { current: Nullable<T> };

export type PromiseResolve<T> = Awaited<T>;
