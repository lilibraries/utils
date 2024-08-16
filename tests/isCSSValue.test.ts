import { isCSSValue } from "@lilib/utils";

describe("isCSSValue", () => {
  it("should validate correctly", () => {
    expect(isCSSValue(0)).toBe(true);
    expect(isCSSValue("")).toBe(true);
    expect(isCSSValue(NaN)).toBe(false);
    expect(isCSSValue(null)).toBe(false);
    expect(isCSSValue(undefined)).toBe(false);
  });
});
