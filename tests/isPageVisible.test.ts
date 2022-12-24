import { isPageVisible } from "@lilib/utils";

describe("isPageVisible", () => {
  it("should return a boolean value", () => {
    expect(typeof isPageVisible()).toBe("boolean");
  });
});
