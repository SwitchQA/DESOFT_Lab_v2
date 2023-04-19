/**
 * function will receive a range of numbers, and return the multiples of 3 in an array
 * example: 1, 10 should return [3, 6, 9]
 * @param start the start of the range
 * @param end the end of the range
 * @returns an array with the multiples of 3 in the given range
 */

export function arrayOfMultiplesOf3InRage(start: number, end: number): number[] {

    let range: number[] = storeInArrayFromRange(start,end);
    let evenArr:number[] = range.filter((num) => num % 3 === 0)
    return evenArr;
}

function storeInArrayFromRange(start: number, end: number): number[] {
    let range: number[] = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}

arrayOfMultiplesOf3InRage(1, 10);