import {StringCalculator} from "../src/string-calculator";

describe("String Calculator", () => {
  it("should return 0 when passed an empty string", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("");
    const expected = 0;
    expect(result).toBe(expected);
  });
  it("should return 1 when '1' passed", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("1");
    const expected = 1;
    expect(result).toBe(expected);
  });
  it("should return 6 when '1,5' passed", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("1,5");
    const expected = 6;
    expect(result).toBe(expected);
  });
  it("should return 55 when '1,2,3,4,5,6,7,8,9,10' passed", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("1,2,3,4,5,6,7,8,9,10");
    const expected = 55;
    expect(result).toBe(expected);
  });
  it("should return 6 when '1\n2,3' passed (combination of \n and ,)", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("1\n2,3");
    const expected = 6;
    expect(result).toBe(expected);
  });
  it("should return 3 when '//;\n1;2' passed + default delimiter is ';'", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("//;\n1;2");
    const expected = 3;
    expect(result).toBe(expected);
  });
  it("should throw 'Negative numbers not allowed -2'", () => {
    const calculator = new StringCalculator();
    const numbers = "-2";
    const expected = `Negative numbers not allowed ${numbers}`;
    expect(() => calculator.add(numbers)).toThrow(expected);
  });
  it("numbers bigger than 1000 should be ignored", () => {
    const calculator = new StringCalculator();
    const numbers = "1,2,3,1001,4";
    const result = calculator.add(numbers);
    const expected = 10;
    expect(result).toBe(expected);
  });
  it("delimiters can be of any length with the following format: '//[delimiter]\n' for example: '//[***]\n1***2***3' should return 6", () => {
    const calculator = new StringCalculator();
    const numbers = "//[***]\n1***2***3";
    const result = calculator.add(numbers);
    const expected = 6;
    expect(result).toBe(expected);
  });
  it("allow multiple delimiters like this: '//[delim1][delim2]\n' for example '//[*][%]\n1*2%3' should return 6", () => {
    const calculator = new StringCalculator();
    const numbers = "//[*][%]\n1*2%3";
    const result = calculator.add(numbers);
    const expected = 6;
    expect(result).toBe(expected);
  });
  it("handle multiple delimiters with length longer than one char like this: '//[delim1][delim2]\n' e.g: '//[***][%%%]\n1***2%%%3' should return 6", () => {
    const calculator = new StringCalculator();
    const numbers = "//[***][%%%]\n1***2%%%3";
    const result = calculator.add(numbers);
    const expected = 6;
    expect(result).toBe(expected);
  });
});
