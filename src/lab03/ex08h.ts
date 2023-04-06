/**
 * function will return the median of the even digits on the given integer.
 * @param number is given number
 * @returns median of the even digits on the given integer
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

import { ensureInteger, ensurePositive, isPair } from "./functions";

export function medianOfEvenDigitsInInteger(number: number): number {

    ensureInteger(number);

    ensurePositive(number);


    let evenDigitsCount = 0;
    let evenDigitsSum = 0;

    while (number > 0) {
        if (isPair(number%10)) {
            evenDigitsCount++;
            evenDigitsSum += number % 10;
        }
        number = Math.floor(number / 10);
    }

    if (evenDigitsCount == 0) {
        return 0;
    }

    return Math.floor(evenDigitsSum / evenDigitsCount);
}

