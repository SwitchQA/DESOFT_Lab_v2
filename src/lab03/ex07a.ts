/**
 * Function that takes a range and returns the sum of all the even numbers in the range.
 * @param start the start of the range
 * @param end the end of the range
 * @returns the sum of the even numbers in the range [start, end]
 * @throws RangeError if start is greater or equal to end - to do
 */

//we can later add exclusions to the function

export function sumOfAllEvenNumbersInRange(start: number, end: number): number {
    let sum: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}