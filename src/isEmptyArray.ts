function isEmptyArray(value: any): value is [] {
  return Array.isArray(value) && !value.length;
}

export default isEmptyArray;
