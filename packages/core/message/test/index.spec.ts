import { header, message, calcHelper } from "../src";

describe("Test Message", () => {
  it("header", () => {
    expect(header).toEqual("Welcome to this monorepo.");
  });
  it("message", () => {
    expect(message).toEqual("Change this message to see the effect.");
  });
  it("calcHelper", () => {
    const result = calcHelper(5, 5, 5, 5, 5, 5);
    expect(result).toEqual("The final result is 3125");
  });
});
