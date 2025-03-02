import {StringCalculator} from "../src/string-calculator";

describe("String Calculator", () => {
  it("should return 0 when passed an empty string", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("");
    expect(result).toBe(0);
  });
  it("should return 1 when '1' passed", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("1");
    expect(result).toBe(1);
  });
  it("should return 6 when '1,5' passed", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("1,5");
    expect(result).toBe(6);
  });
});
