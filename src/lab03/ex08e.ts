/**
 * function will return the sum of all even digits in given integer.
 * @param number is given number
 * @returns sum of all even digits in given integer
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive, isEven, returnsRemainder} from "./functions";

export function sumEvenDigitsInGivenInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);

    let sum = 0;
    while (number > 0) {
        if (isEven(returnsRemainder(number, 10))) { //i think this makes more sense, ChatGPT doesn't agree
            sum += returnsRemainder(number, 10);
        }
        number = Math.floor(number / 10);
    }
    return sum;
}