import { mathOperations } from "../src";

describe("Test Calculator", () => {
  it("sum", () => {
    let sum = mathOperations["sum"](5, 5);
    expect(sum).toEqual(10);
  });

  test("sun", () => {
    let sub = mathOperations.sub(5, 5);
    expect(sub).toBe(0);
  });

  test("multiply", () => {
    let mul = mathOperations.multiply(5, 5);
    expect(mul).toBe(25);
  });

  test("division", () => {
    let div = mathOperations.divide(5, 5);
    expect(div).toBe(1);
  });

  test("exponent", () => {
    let exp = mathOperations.exponent(5, 5);
    expect(exp).toBe(3125);
  });
});
