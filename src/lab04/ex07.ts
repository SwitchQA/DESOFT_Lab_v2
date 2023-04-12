/**
 * function will input a number and return a number after calculating the sum of the odd numbers of the input
 * @param numArr the input array
 * @returns the sum of the even numbers of the input array
 */

import { storeDigits } from "./ex02";
import { isEven } from "../lab03/functions";

export function sumOfAllOddNumbersInArray(num: number): number {
    let sum: number = 0;
    let numArr:number[] = storeDigits(num);
    for (let i = 0; i < numArr.length; i++) {
        if (!isEven(numArr[i])) {
            sum += numArr[i];
        }
    }
    return sum;
}