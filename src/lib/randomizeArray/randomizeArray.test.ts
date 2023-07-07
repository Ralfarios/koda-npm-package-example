/**
 * For keep the tutorial on focus, these test only just for the show.
 * Should be researching about how to test random value for Jest.
 */

import randomizeArray from "./randomizeArray";

describe("Test randomizeArray", () => {
  test("Get random value on array", () => {
    const arr = ["JavaScript", "TypeScript", "Dart"];
    const random = randomizeArray(arr);
    expect(random.length).toBe(1);
  });

  test("Remove random value on array", () => {
    const arr = ["JavaScript", "TypeScript", "Dart"];
    const random = randomizeArray(arr, { isInvertSelection: true });
    expect(random.length).toBe(2);
  });
});
