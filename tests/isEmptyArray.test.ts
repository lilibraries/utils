import { isEmptyArray } from "@lilib/utils";

describe("isPositiveNumber", () => {
  it("should validate correctly", () => {
    expect(isEmptyArray([])).toBe(true);
    expect(isEmptyArray({})).toBe(false);
    expect(isEmptyArray([[]])).toBe(false);
    expect(isEmptyArray([""])).toBe(false);
    expect(isEmptyArray(null)).toBe(false);
  });
});
