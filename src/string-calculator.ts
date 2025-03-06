/**
 * StringCalculator class
 */
export class StringCalculator {
  /**
   * Calculate sum of numbers
   * @param numbers - String of numbers separated by delimiters
   * @param delimiters - Array of delimiters to split numbers
   * @returns Sum of numbers
   */
  private calculateSum(numbers: string, delimiters: string[]): number {
    // Form following regular expression:
    // ["\n", ","] => /[\n|,]/g or ["*", "%"] => /[*|%]/g or ["***", "%%%"] => /[***|**%]/g
    const delimiterRegex = new RegExp(`[${delimiters.join("|")}]`, "g");
    const validNumbers = [];
    const inValidNumbers = [];
    const negativeNumbers = [];
    for (const num of numbers.split(delimiterRegex).filter((item) => item.length > 0)) {
      const number = parseInt(num);
      if (isNaN(number)) {
        inValidNumbers.push(num);
      } else if (number < 0) {
        negativeNumbers.push(num);
      } else {
        validNumbers.push(number);
      }
    }

    if (inValidNumbers.length > 0) {
      throw new Error(`Invalid numbers ${inValidNumbers.join(", ")}`);
    }

    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed ${negativeNumbers.join(", ")}`);
    }

    return validNumbers.filter((num) => num <= 1000).reduce((sum, num) => sum + num, 0);
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
      // To match more than one occurrence of delimiters surrounded by the square brackets
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
