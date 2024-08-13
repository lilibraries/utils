import { isObject } from "@lilib/utils";

describe("isObject", () => {
  it("should validate correctly", () => {
    expect(isObject({})).toBe(true);
    expect(isObject(null)).toBe(false);
  });
});
