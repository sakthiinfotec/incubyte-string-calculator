import {parse} from "path";

/**
 * StringCalculator class
 */
export class StringCalculator {
  /**
   * Calculate sum of numbers
   * @param numbers - String of numbers separated by delimiters
   * @param delimiter - Delimiter to split numbers
   * @returns Sum of numbers
   */
  private calculateSum(numbers: string, delimiter: string): number {
    return numbers
      .split(delimiter)
      .map((num) => parseInt(num))
      .filter((num) => num <= 1000)
      .reduce((sum, num) => sum + num, 0);
  }

  /**
   * Add method
   * @param numbers - String of numbers separated by delimiters
   * @returns Sum of numbers
   */
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    } else if (parseInt(numbers) < 0) {
      throw new Error(`Negative numbers not allowed ${numbers}`);
    }

    let delimiter = ";";
    if (numbers.includes("//")) {
      const [delimiterPart, numbersPart] = numbers.split("\n");
      delimiter = delimiterPart.replace("//", "");
      return this.calculateSum(numbersPart, delimiter);
    }

    const regEx = new RegExp("\n|,", "g");
    numbers = numbers.replace(regEx, delimiter);
    return this.calculateSum(numbers, delimiter);
  }
}
