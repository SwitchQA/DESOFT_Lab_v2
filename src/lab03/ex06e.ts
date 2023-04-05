/**
 * function that takes two numbers and returns the sum of all the multiples of BOTH two given numbers in a range.
 * @param start the start of the range
 * @param end the end of the range
 * @param n1 the first number
 * @param n2 the second number
 * @returns the sum of all the multiples of n1 and n2 in the range [start, end]
 * @throws RangeError if start is greater or equal to end
 * @throws Error if n1 or n2 are negative
*/

export function sumTheMultiplesOfTwoGivenNumbersInRange(start: number, end: number, n1: number, n2: number): number {
    if (start >= end) {
        throw new RangeError('Start is greater than or equal to end');
    }
    if (n1 < 0 || n2 < 0) {
        throw new Error('n1 or n2 are negative');
    }
    
    let sum: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % n1 == 0 && i % n2 == 0) {
            sum += i;
        }
    }
    return sum;
}