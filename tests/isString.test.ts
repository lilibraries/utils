import { isString } from "@lilib/utils";

describe("isString", () => {
  it("should validate correctly", () => {
    expect(isString("")).toBe(true);
    expect(isString("test")).toBe(true);
    expect(isString(0)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(Symbol())).toBe(false);
  });
});
