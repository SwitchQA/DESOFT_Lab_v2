/***
 * this function will sum every number that is multiple of a given number, in a given range. this range can be either ascending or descending
 * @param start the start of the range
 * @param end the end of the range
 * @returns the sum of all the numbers that are multiple of the given number in the given range
 * @throws Error if start and end are equal
 */

//TODO: não entendo porque é que se tenho um throw error caso o start e o end sejam iguais, mas a mutação sobrevive

export function sumOfMultiplesInRange(start: number, end: number, multiple: number): number {

    if (start == end) {
        throw new RangeError("start and end cannot be equal");
    }

    let sum: number = 0;
    if (start < end) {
        for (let i = start; i <= end; i++) {
            if (i % multiple == 0) {
                sum += i;
            }
        }
    } else {
        for (let i = start; i >= end; i--) { // also possible to use (i = end; i <= start; i++)
            if (i % multiple == 0) {
                sum += i;
            }
        }
    }
    return sum;


}

///is this the better?

export function ensureStartHigherThanEnd(start: number, end: number): boolean {
    if (start < end) {
        return true
    }
    return false
}

function sumOfMultiplesInRange2(start: number, end: number, multiple: number): number {
    let sum = 0;
    if (!ensureStartHigherThanEnd(start, end)) {
        let temp = start;
        start = end;
        end = temp;
    }
    for (let i = start; i <= end; i++) {
        if (i % multiple == 0) {
            sum += i;
        }
    }	
    return sum;
}

///or this?

function sumOfMultiplesInRange3(start: number, end: number, multiple: number): number {
    let sum = 0;
    if (start > end){
        [start, end] = [end, start];
    }

    for (let i = start; i <= end; i++) {
        if (i % multiple == 0) {
            sum += i;
        }
    }	
    return sum;
}