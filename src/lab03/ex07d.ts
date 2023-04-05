/***
 * function similar to ex07b but for odd numbers
 * @param start the start of the range
 * @param end the end of the range
 * @returns the number of odd numbers in the range [start, end]
 */

export function countNumberOfOddNumbersInRange(start: number, end: number): number {
    let count: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            count++;
        }
    }
    return count;
}