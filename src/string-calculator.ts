import {parse} from "path";

/**
 * StringCalculator class
 */
export class StringCalculator {
  /**
   * Add method
   * @param numbers - String of numbers separated by delimiters
   * @returns Sum of numbers
   */
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimiter = ";";
    if (numbers.includes("//")) {
      const parts = numbers.split("\n");
      delimiter = parts[0].replace("//", "");
      const numbersPart = parts[1];
      return numbersPart.split(delimiter).reduce((sum, num) => sum + parseInt(num), 0);
    }

    const regEx = new RegExp("\n|,", "g");
    numbers = numbers.replace(regEx, delimiter);
    return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num), 0);
  }
}
