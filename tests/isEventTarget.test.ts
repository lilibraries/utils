import { isEventTarget } from "@lilib/utils";

describe("isEventTarget", () => {
  it("should validate correctly", () => {
    expect(isEventTarget({})).toBe(false);
    expect(isEventTarget({ addEventListener: () => {} })).toBe(false);
    expect(isEventTarget({ removeEventListener: () => {} })).toBe(false);
    expect(
      isEventTarget({
        addEventListener: () => {},
        removeEventListener: () => {},
      })
    ).toBe(true);
  });
});
