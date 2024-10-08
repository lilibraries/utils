import isString from "lodash/isString";
import isNumber from "lodash/isNumber";

function isCSSValue(value: any): value is string | number {
  return isString(value) || (isNumber(value) && !isNaN(value));
}

export default isCSSValue;
