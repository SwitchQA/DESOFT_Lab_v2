/**
 * function will take a number and return true if the number is Armstrong
 * @param number
 * @returns boolean 
 */

export function isArmstrong(number: number): boolean {
    let numStr: string = number.toString();
    const numDigits = numStr.length;
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum += Math.pow(digit, numDigits);
    }
    return sum == number;
}
