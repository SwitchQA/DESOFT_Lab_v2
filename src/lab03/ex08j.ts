/**
 * function will return the digits given in an integer, in reserve order.
 * @param number is given number
 * @returns digits given in an integer, in reserve order
 * @throws Error if number is not a integer
 * @throws Error if number is negative 
 */

import { ensureInteger, ensurePositive } from "./functions";

export function reverseDigitsInInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);

    let reverseNumber = 0;

    while (number > 0) {
        reverseNumber = reverseNumber * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    return reverseNumber;
}