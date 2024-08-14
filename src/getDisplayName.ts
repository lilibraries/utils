import isObject from "./isObject";
import isFunction from "./isFunction";

function getDisplayName(value: any): string {
  let displayName: string = "";
  if (isFunction(value)) {
    displayName =
      (value as any).displayName || value.name || "[object Function]";
  } else if (isObject(value)) {
    displayName = Object.prototype.toString.call(value);
  }
  return String(displayName || value);
}

export default getDisplayName;
