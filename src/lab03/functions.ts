//after ex.8 I realized I could create a specific file for simple functions I would commonly use 
//ex.8 functions
export function ensureInteger(number: number) {
    if (!Number.isInteger(number)) {
        throw new Error('number is not an integer');
    }
}

export function ensurePositive(number: number) {
    if (number < 0) {
        throw new Error('number is negative');
    }
}

export function isEven(number: number): boolean {
    return number % 2 == 0;
}

export function returnsRemainder(number: number, divisor: number): number {
    return number % divisor;
}