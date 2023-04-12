/**
 * function will receive a number, and will return the number of digits in the number.
 * @param number
 * @returns number
 */

export function countDigits(number: number): number {
    let numStr: string = number.toString();
    return numStr.length;
}