import { isSymbol } from "@lilib/utils";

describe("isSymbol", () => {
  it("should validate correctly", () => {
    expect(isSymbol("test")).toBe(false);
    expect(isSymbol(Symbol("test"))).toBe(true);
  });
});
