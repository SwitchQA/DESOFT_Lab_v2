//ex.1
//este algoritmo calcula o fatorial de um dado número

export function calcFatorial(num: number): number {
    if (num < 0 || num % 1 !== 0) {
        throw new Error('Invalid input');
    }
    let res: number = 1;
    for (let x: number = num; x >= 2; x--) {
        res *= x;
    }
    return res
}

// this exercise using a class

class FactorialCalculator {
    //Fields
    private num: number;

    //Construtor
    constructor(num: number) {
        if (num < 0 || num % 1 !== 0) {
            throw new Error('Invalid input');
        }
        this.num = num;
    }
    //Functions
    public calcFactorial(): number {
        let res: number = 1;
        for (let x: number = this.num; x >= 2; x--) {
            res *= x;
        }
        return res;
    }
}