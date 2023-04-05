/**
 * this function will return the product of every multiple of a given number, in a given range
 * @param start the start of the range
 * @param end the end of the range
 * @returns the product of all the numbers that are multiple of the given number in the given range
 * @throws Error if start is greather than or equal to end
 */

export function productOfMultiplesInRange(start: number, end: number, multiple: number): number {

    if (start >= end) {
        throw new RangeError("start cannot be greater than or equal to end");
    }

    let product: number = 1;
    for (let i = start; i <= end; i++) {
        if (i % multiple == 0) {
            product *= i;
        }
    }
    return product;
}