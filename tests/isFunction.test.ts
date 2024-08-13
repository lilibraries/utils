import { isFunction } from "@lilib/utils";

describe("isFunction", () => {
  it("should validate correctly", () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(Function)).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
  });
});
