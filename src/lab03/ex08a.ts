/**
 * function will return the number of algarisms in a integer number
 * @param number is given number
 * @returns number of algarisms in a integer number
 * @throws Error if number is not a integer
 * @throws Error if number is negative
 */

export function countNumberOfAlgarismsInInteger(number: number): number {

    if (!Number.isInteger(number)) {
        throw new Error('number is not a integer');
    }
    if (number < 0) {
        throw new Error('number is negative');
    }

    if (number == 0){
        return 1;
    } 
    
    let count = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}