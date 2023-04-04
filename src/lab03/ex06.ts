/////////////ideas

/////////////questions:


//ex.6

//ex.6.a //my resolution

export function countMultiplesOfThreeInRage_mine(start: number, end: number): number {
        let count: number = 0;
        for (let i = start; i <= end; i++) {
            if (i % 3 == 0) {
                count++;
            }
        }
        return count;
    }
    /*
    return countMultiplesOfNumberInRage_mine(3, start, end); //depois de fazer o ex.6.b, voltei aqui e fiz assim
}
*/

//ex.6.b //my resolution
export function countMultiplesOfNumberInRage_mine(num: number, start: number, end: number) {
    let count: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % num == 0) {
            count++;
        }
    }
    return count;

}

//ex.6.c //my resolution

export function countMultiplesOfThreeAndFiveInRange_mine(start: number, end: number) {
    let counts: number = countMultiplesOfNumberInRage_mine(3, start, end) + countMultiplesOfNumberInRage_mine(5, start, end);
    return counts;
}

//ex.6.d //my resolution

export function countMultiplesofTwoNumbersInRange_mine(num1: number, num2: number, start: number, end: number) {
    let counts: number = countMultiplesOfNumberInRage_mine(num1, start, end) + countMultiplesOfNumberInRage_mine(num2, start, end);
    return counts;
}

//ex.6.e //my resolution

function sumMultiplesOfNumbersInRange_mine(num: number, start: number, end: number) {
    let sum: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % num == 0) {
            sum = sum + num;
        }
    }
    return sum
}

export function sumTheMultiplesOfTwoNumbersInRange_mine(num1: number, num2: number, start: number, end: number) {
    let sum = sumMultiplesOfNumbersInRange_mine(num1, start, end) + sumMultiplesOfNumbersInRange_mine(num2, start, end);
    return sum;
}

//ex.6.a //ai resolution
//uses function from ex.6.b
/*
export function countMultiplesOfThreeInRange(start: number, end: number): number {
    let count: number = 0;
    countMultiplesOfNumbersInRange(["3"], start, end);
    return count;
}
*/
//ex.6.b //ai resolution
/*
export function countMultiplesOfNumbersInRange(nums: string[], start: number, end: number): number[] {
    const counts: number[] = new Array(nums.length).fill(0);

    for (let i = start; i <= end; i++) {
        for (let j = 0; j < nums.length; j++) {
            const num = parseInt(nums[j], 10);
            if (i % num == 0) {
                counts[j]++;
            }
        }
    }

    return counts;
}
*/
//ex.6.c //ai resolution
/*
export function countMultiplesOf3And5InRange(start: number, end: number): number {
    let multiplesOf3And5 = countMultiplesOfNumbersInRange(["3", "5"], start, end);
    return Number(multiplesOf3And5[0] + " " + multiplesOf3And5[1]);
}
*/
//ex.6.d //ai resolution

///////same as ex.6.b

//ex.6.e //ai resolution
/*
export function sumMultiplesOfNumbersInRange(nums: string[], start: number, end: number): number {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        for (let j = 0; j < nums.length; j++) {
            const num = parseInt(nums[j], 10); //the 10 here is the radix, which is the base of the number, in this case a decimal number
            if (i % num == 0) {
                sum = sum + i;
                break; //break is needed here, otherwise it will add the number multiple times
            }
        }
    }

    return sum;
}
*/
/*
//ex.7

function listPairNumbersInRange(start: number, end: number): number[] {
    let arrayPairs: number[] = [0];
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            arrayPairs.push(i);
        }
    }
    return arrayPairs;
}

function listOddNumbersInRange(start:number, end:number):number[]{
    let arrayOdds: number[] = [0];
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            arrayOdds.push(i);
        }
    }
    return arrayOdds;
}

function isPair(num:number){
    if (num % 2 == 0) {
        return true;
    }
}
*/
/*
//ex.7.a

//option1
/**
 * 
 * @param start inicio do intervalo
 * @param end fim do intervalo
 * @returns 
 */

/*
export function sumPairNumbersInRange(start: number, end: number) {
    let sum: number = 0;
    for (let i = start; i <= end; i++) {
        if (isPair(i)) {
            sum = sum + i;
        }
    }
    return sum
}
//option2 with array
export function sumPairNumbersInRange_2(start: number, end: number) {
    let sum: number = 0;
    let evenNumbers: number[] = listPairNumbersInRange(start, end);
    for (let i = 0; i < evenNumbers.length; i++) {
        sum = sum + evenNumbers[i];
    }
    return sum
}

//ex.7.b
//option 1
export function countPairNumbersInRange(start: number, end: number) {
    let count: number = 0;
    for (let i = start; i <= end; i++) {
        if (isPair(i)) {
            count++
        }
    }
    return count
}
//option2
export function countPairNumbersInRange_2(start: number, end: number) {
    let evenNumbers: number[] = listPairNumbersInRange(start, end);
    let count: number = 0;
    for (let i=0; i < evenNumbers.length;i++){
        count++;
    }
    return count
}
*/