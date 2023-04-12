/**
 * function will return the number(count) of possible sums (using two numbers ranging from 0-10) to obtain a number given
 * number given must be within range 1-20
 * @param number
 * @returns number
 * @throws Error if number is not within range 1-20 
 */

export function countSums(number: number): number {
  if (number < 1 || number > 20) {
    throw new Error("Number must be within range 1-20");
  }
  let count = 0;
  for (let i = 0; i <= 10; i++) {
    for (let j = i; j <= 10; j++) {
      if (i + j === number) {
        count++;
      }
    }
  }
  return count;
}
