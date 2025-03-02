import {StringCalculator} from "../src/string-calculator";

describe("String Calculator", () => {
  it("should return 0 when passed an empty string", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("");
    expect(result).toBe(0);
  });
});
