/**
 * function will take a number, and store each digit in an array
 */

export function storeDigits(number: number): number[] {
    let numStr: string = number.toString();
    let numArr: number[] = [];
    for (let i = 0; i < numStr.length; i++) {
        numArr.push(parseInt(numStr[i]));
    }
    return numArr;
}