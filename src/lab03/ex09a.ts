/**
 * function will verify is a number is capicua
 * @param number
 * @returns boolean
 */

export function isCapicua(number: number): boolean {
  let numberString = number.toString();
  let numberStringReverse = numberString.split("").reverse().join("");
  return numberString === numberStringReverse;
}

// function using mathematical operations
/*
function isCapicua(num) {
    let original = num;
    let reversed = 0;
    while (num > 0) {
      reversed = reversed * 10 + returnRemainder(num, 10));
      num = Math.floor(num / 10);
    }
    return original === reversed;
  }
  */