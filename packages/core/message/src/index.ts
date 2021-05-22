import { superCalc } from '@monorepo/super-calc';

export const header = "Welcome to this monorepo !.";
export const message = "Change this message to see the effect.";
export const calcHelper = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,  
  f: number
): string => {
  let result: number = superCalc.sum(a)(b);
  result = superCalc.sub(result)(c);
  result = superCalc.multiply(result)(d);
  result = superCalc.divide(result)(e);
  result = superCalc.exponent(result)(f);
 
  return `The final result is ${result}`;
};
 

