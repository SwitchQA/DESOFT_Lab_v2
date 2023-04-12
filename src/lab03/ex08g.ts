/**
 * function will return the median of the digits of the given integer.
 * @param number is given number
 * @returns median of the digits of the given integer
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive, returnsRemainder } from "./functions";

//need to correct 0 case
export function medianOfDigitsInInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);

    let sum = 0;
    let count = 0;
    while (number > 0) {
        sum += returnsRemainder(number, 10);
        count++;
        number = Math.floor(number / 10);
    }
    return Math.floor(sum / count);
}