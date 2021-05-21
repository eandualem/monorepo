import { sum } from "../src/foo";

describe("Test Calculator", () => {
  it("test addition works", () => {
    expect(10).toEqual(10);
  });

  test("basic", () => {
    expect(sum()).toBe(0);
  });

  test("basic again", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
