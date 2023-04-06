/**
 * function will return the number of algarisms in a integer number
 * @param number is given number
 * @returns number of algarisms in a integer number
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive } from "./functions";

export function countNumberOfAlgarismsInInteger(number: number): number {

ensureInteger(number);

ensurePositive(number);

    if (number == 0) {
        return 1;
    }

    let count = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}

