/**
 * function will take a number, and return an array with only even numbers
 * uses functions isEven and storeDigits
 */

//should be more interesting to use ex.2 function instead of receiving an array, but the exercise specifies to use an array as input
//can't get this done with stryker

import { isEven } from "../lab03/functions";

export function getEvenDigits(numArr: number[]): number[] {
    let evenArr: number[] = [];
    for (let i = 0; i < numArr.length; i++) {
        if (isEven(numArr[i])) {
            evenArr.push(numArr[i]);
        }
    }
    return evenArr;
}