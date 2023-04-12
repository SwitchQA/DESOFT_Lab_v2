/**
 * function will return sum of all algarisms in given integer.
 * @param number is given number
 * @returns sum of all algarisms in given integer
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive, returnsRemainder } from "./functions";

export function sumOfAllAlgarismsInInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);

    let sum = 0;
    while (number > 0) {
        sum += returnsRemainder(number, 10); 
        number = Math.floor(number / 10);
    }
    return sum;
}
