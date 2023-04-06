/**
 * function will return the number of odd numbers, in given integer
 * @param number is given number
 * @returns number of odd numbers in a integer number
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive, isPair } from "./functions";

export function countOddNumbersInInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);

    let count = 0;
    while (number > 0) {
        if (!isPair(number)) {
            count++;
        }
        number = Math.floor(number / 10); //could I modulate this line in a function?
    }
    return count;
}