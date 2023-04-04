export function countMultiplesofGivenNumberinRange(start: number, end: number, num: number): number {
    let count: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % num == 0) {
            count++;
        }
    }
    return count;
}