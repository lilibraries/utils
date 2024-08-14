import isObject from "./isObject";
import isFunction from "./isFunction";

// The following types are copied from @types/react which licensed under the MIT license.
interface RefObject<T> {
  readonly current: T | null;
}
interface MutableRefObject<T> {
  current: T;
}
type RefCallback<T> = {
  bivarianceHack(instance: T | null): void;
}["bivarianceHack"];
type Ref<T> = RefCallback<T> | RefObject<T> | null;

function composeRefs<T>(...refs: Ref<T>[]): RefCallback<T> {
  return (instance: T) => {
    refs.forEach((ref) => {
      if (isFunction(ref)) {
        ref(instance);
      } else if (isObject(ref) && "current" in ref) {
        (ref as MutableRefObject<T>).current = instance;
      }
    });
  };
}

export default composeRefs;
