import inBrowser from "./inBrowser";
import isObject from "./isObject";
import isFunction from "./isFunction";
import { Nullable, EffectTarget } from "./types";

function getEffectTarget<T>(target: EffectTarget<T>): Nullable<T> {
  if (!inBrowser) {
    return null;
  }
  if (isFunction(target)) {
    return target();
  }
  if (isObject(target) && "current" in target) {
    return target.current;
  }
  return target;
}

export default getEffectTarget;
