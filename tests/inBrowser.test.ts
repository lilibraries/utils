import { inBrowser } from "@lilib/utils";

describe("inBrowser", () => {
  it("should be a boolean", () => {
    expect(typeof inBrowser).toBe("boolean");
  });
});
