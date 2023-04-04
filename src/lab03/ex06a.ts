export function countMultiplesof3InRange(start: number, end: number): number {
    let count: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 == 0) {
            count++;
        }
    }
    return count;
}