export function sumOfAllOddNumbersInRange(start: number, end: number): number {

    let sum: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}