import { isPositiveNumber } from "@lilib/utils";

describe("isPositiveNumber", () => {
  it("should compare correctly", () => {
    [1, 10, 100, 1.1, Infinity].forEach((num) => {
      expect(isPositiveNumber(num)).toBe(true);
    });

    [-1, -0.1, 0, -Infinity, "0", "1", "-1", NaN].forEach((num) => {
      expect(isPositiveNumber(num)).toBe(false);
    });
  });
});
