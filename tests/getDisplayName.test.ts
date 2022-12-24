import { getDisplayName } from "@lilib/utils";

describe("getDisplayName", () => {
  it("get display name correctly", () => {
    function C() {}
    C.displayName = "CName";

    [
      [class A {}, "A"],
      [function B() {}, "B"],
      [C, "CName"],
      [() => {}, "[object Function]"],
      ["string", "string"],
      [Symbol("label"), "Symbol(label)"],
      [100, "100"],
      [[], "[object Array]"],
      [{}, "[object Object]"],
      [undefined, "undefined"],
      [null, "null"],
    ].forEach(([value, expected]) => {
      expect(getDisplayName(value)).toBe(expected);
    });
  });
});
