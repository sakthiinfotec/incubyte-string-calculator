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
    return parseInt(numbers);
  }
}
