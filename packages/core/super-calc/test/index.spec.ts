import { superCalc } from "../src";

describe("Test Calculator", () => {
  it("sum", () => {
    const sum = superCalc.sum(5)(5);
    expect(sum).toEqual(10);
  });

  test("sun", () => {
    const sub = superCalc.sub(5)(5);
    expect(sub).toBe(0);
  });

  test("multiply", () => {
    const mul = superCalc.multiply(5)(5);
    expect(mul).toBe(25);
  });

  test("division", () => {
    const div = superCalc.divide(5)(5);
    expect(div).toBe(1);
  });

  test("exponent", () => {
    const exp = superCalc.exponent(5)(5);
    expect(exp).toBe(3125);
  });
});
