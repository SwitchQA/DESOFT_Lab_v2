/**
 * function will return the median of the odd digits on the given integer.
 * @param number is given number
 * @returns median of the odd digits on the given integer
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive, isPair } from "./functions";

export function medianOfOddDigitsInInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);


    let oddDigitsCount = 0;
    let oddDigitsSum = 0;

    while (number > 0) {
        if (!isPair(number%10)) {
            oddDigitsCount++;
            oddDigitsSum += number % 10;
        }
        number = Math.floor(number / 10);
    }

    if (oddDigitsCount == 0) {
        return 0;
    }

    return Math.floor(oddDigitsSum / oddDigitsCount);
}


