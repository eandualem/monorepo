import { calc } from "@monorepo/calc";

export const superCalc = {
  sum:
    (x: number): Function =>
    (y: number): number =>
      calc.sum(x, y),
  sub:
    (x: number): Function =>
    (y: number): number =>
      calc.sub(x, y),
  multiply:
    (x: number): Function =>
    (y: number): number =>
      calc.multiply(x, y),
  divide:
    (x: number): Function =>
    (y: number): number =>
      calc.divide(x, y),
  exponent:
    (x: number): Function =>
    (y: number): number =>
      calc.exponent(x, y),
};
