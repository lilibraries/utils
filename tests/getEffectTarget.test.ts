import { inBrowser, getEffectTarget } from "@lilib/utils";

describe("getEffectTarget", () => {
  it("should get target correctly", () => {
    const target = "target";
    const creator1 = () => target;
    const creator2 = { current: target };

    expect(getEffectTarget(target)).toBe(inBrowser ? target : null);
    expect(getEffectTarget(creator1)).toBe(inBrowser ? target : null);
    expect(getEffectTarget(creator2)).toBe(inBrowser ? target : null);
  });
});
