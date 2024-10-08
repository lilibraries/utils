import isNumber from "lodash/isNumber";

function isPositiveNumber(value: any): value is number {
  return isNumber(value) && value > 0;
}

export default isPositiveNumber;
