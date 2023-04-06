/**
 * function will return the sum of all even digits in given integer.
 * @param number is given number
 * @returns sum of all even digits in given integer
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive, isPair } from "./functions";

export function sumEvenDigitsInGivenInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);

    let sum = 0;
    while (number > 0) {
       if (isPair(number % 10)){ //i think this makes more sense, ChatGPT doesn't agree
        sum += number % 10;
       }
        number = Math.floor(number / 10);
    }
    return sum;
}