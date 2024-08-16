import { isRenderable } from "@lilib/utils";

describe("isRenderable", () => {
  it("should validate correctly", () => {
    expect(isRenderable(0)).toBe(true);
    expect(isRenderable("")).toBe(true);
    expect(isRenderable([])).toBe(false);
    expect(isRenderable(true)).toBe(false);
    expect(isRenderable(false)).toBe(false);
    expect(isRenderable(null)).toBe(false);
    expect(isRenderable(undefined)).toBe(false);
  });
});
