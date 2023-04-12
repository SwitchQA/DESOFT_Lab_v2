/**
 * function will return the number of even algarisms in a integer number;
 * @param number is given number
 * @returns number of even algarisms in a integer number
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive, isEven } from "./functions";

export function countEvenNumbersInInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);

    let count = 0;
    while (number > 0) {
        if (isEven(number)) {
            count++;
        }
        number = Math.floor(number / 10);
    }
    return count;
}