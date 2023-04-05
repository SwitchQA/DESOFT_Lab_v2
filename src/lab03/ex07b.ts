/***
 * Write a function that counts the number of even numbers in a range.
 * @param start the start of the range
 * @param end the end of the range
 * @returns the number of even numbers in the range [start, end]
 * @throws RangeError if start is greater or equal to end - to do
 */

export function countNumberOfEvenNumbersInRange(start: number, end: number): number {
    let count: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            count++;
        }
    }
    return count;
}