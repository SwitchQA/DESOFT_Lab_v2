/**
 * function will return the sum of all odd digits in given integer.
 * @param number is given number
 * @returns sum of all odd digits in given integer
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive, isEven } from "./functions";

export function sumOddDigitsInInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);

    let sum = 0;
    while (number > 0) {
        if (!isEven(number % 10)) {
            sum += number % 10;
        }
        number = Math.floor(number / 10);
    }
    return sum;
}