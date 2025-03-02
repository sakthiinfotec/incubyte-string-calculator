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
  private calculateSum(numbers: string, delimiters: string[]): number {
    // Form following regular expression: ["\n", ","] => /[\n,]/ or ["*", "%"] => /[*%]/
    const delimiter = new RegExp(`[${delimiters.join("")}]`);
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

    let delimiters = ["\n", ","];
    if (numbers.includes("//")) {
      const [delimiterPart, numbersPart] = numbers.split("\n");
      // To match the delimiter in more than one square brackets
      const regex = /\[([^\]]+)\]/g;

      // Use matchAll to find all occurrences
      const matches = [...delimiterPart.matchAll(regex)];
      if (matches.length > 0) {
        // Extract the delimiters of each match
        delimiters = matches.map((match) => match[1]);
      } else {
        const delimiter = delimiterPart.replace("//", "");
        delimiters = [delimiter];
      }
      numbers = numbersPart;
    }

    return this.calculateSum(numbers, delimiters);
  }
}
