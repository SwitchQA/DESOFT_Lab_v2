/**
 * function will take an array of numbers, and return the sum of the digits in the number
 * uses the function storeDigits
 */

//would be more interesting to use ex.2 function by receiving a number, but the exercise doesn't ask that.

export function sumDigits(number: number[]): number {
  
    let sum: number = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
}

