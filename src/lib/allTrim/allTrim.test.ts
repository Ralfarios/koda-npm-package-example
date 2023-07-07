import allTrim from "./allTrim";

describe("Test allTrim", () => {
  test("Space on the front", () => {
    const trim = allTrim("  The Front Spacing");
    expect(trim).toBe("The Front Spacing");
  });
  test("Space on the back", () => {
    const trim = allTrim("The Back Spacing      ");
    expect(trim).toBe("The Back Spacing");
  });
  test("Double spacing", () => {
    const trim = allTrim("All     this spacing    makes    me  craayzee");
    expect(trim).toBe("All this spacing makes me craayzee");
  });
  test("Double Spacing + Space on the front and back", () => {
    const trim = allTrim("    Welcome   to    the      space ship    ");
    expect(trim).toBe("Welcome to the space ship");
  });
  test("Cannot accept the number", () => {
    expect(() => {
      // @ts-expect-error testing wrong argument type
      allTrim(111222);
    }).toThrow();
  });
  test("Cannot accept the boolean", () => {
    expect(() => {
      // @ts-expect-error testing wrong argument type
      allTrim(true);
    }).toThrow();
  });
  test("Cannot accept the object", () => {
    expect(() => {
      // @ts-expect-error testing wrong argument type
      allTrim({ obj: "obj" });
    }).toThrow();
  });
  test("Cannot accept the object", () => {
    expect(() => {
      // @ts-expect-error testing wrong argument type
      allTrim({ obj: "obj" });
    }).toThrow();
  });
});
