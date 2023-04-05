/**
 * this function will return the median of the multiples of two given numbers, in a given range
 * @param start the start of the range
 * @param end the end of the range
 * @returns the median of all the numbers that are multiple of the given number in the given range
 * @throws Error if start is greather than or equal to end
 */
import { medianOfMultiplesInRange } from "./ex07g";

export function medianOfTwoMultiplesInRange(start: number, end: number, multiple1: number, multiple2: number): number {

    let median1 = medianOfMultiplesInRange(start, end, multiple1);
    let median2 = medianOfMultiplesInRange(start, end, multiple2);
    return (median1 + median2) / 2;
}