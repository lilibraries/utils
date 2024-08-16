import isBoolean from "lodash/isBoolean";
import isEmptyArray from "./isEmptyArray";

function isRenderable<T = any>(
  node: T
): node is Exclude<T, null | undefined | boolean> {
  if (Array.isArray(node) && node.length) {
    return node.some(isRenderable);
  }
  return node != null && !isBoolean(node) && !isEmptyArray(node);
}

export default isRenderable;
