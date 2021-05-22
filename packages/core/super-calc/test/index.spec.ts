import { superCalc } from "../src";

describe("Test Calculator", () => {
  it("sum", () => {
    let sum = superCalc.sum(5)(5);
    expect(sum).toEqual(10);
  });

  test("sun", () => {
    let sub = superCalc.sub(5)(5);
    expect(sub).toBe(0);
  });

  test("multiply", () => {
    let mul = superCalc.multiply(5)(5);
    expect(mul).toBe(25);
  });

  test("division", () => {
    let div = superCalc.divide(5)(5);
    expect(div).toBe(1);
  });

  test("exponent", () => {
    let exp = superCalc.exponent(5)(5);
    expect(exp).toBe(3125);
  });
});
