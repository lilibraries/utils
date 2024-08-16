import { isPromise } from "@lilib/utils";

describe("isPromise", () => {
  it("should validate correctly", () => {
    expect(isPromise(new Promise(() => {}))).toBe(true);
    expect(isPromise(Promise)).toBe(false);
    expect(isPromise({})).toBe(false);
  });
});
