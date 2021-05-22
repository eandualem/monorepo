import { calc } from "../src";

describe("Test Calculator", () => {
  it("sum", () => {
    const sum = calc["sum"](5, 5);
    expect(sum).toEqual(10);
  });

  test("sun", () => {
    const sub = calc.sub(5, 5);
    expect(sub).toBe(0);
  });

  test("multiply", () => {
    const mul = calc.multiply(5, 5);
    expect(mul).toBe(25);
  });

  test("division", () => {
    const div = calc.divide(5, 5);
    expect(div).toBe(1);
  });

  test("exponent", () => {
    const exp = calc.exponent(5, 5);
    expect(exp).toBe(3125);
  });
});
