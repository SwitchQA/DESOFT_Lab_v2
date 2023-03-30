/////////////ideas

/////////////questions:


//ex.1
//este algoritmo
/*
export function calcFatorial(num: number): number {
    let res: number = 1;
    let x: number;
    for (x = num; x >= 1; x--) {
        res = res * x;
    }
    return res
}
*/
//ex.2
/*
export function cambioCalculator(euro: number, convertCurrency: string): number {
    let newValue: number = 0;
    const validCurrencies = ['D', 'L', 'I', 'C', 'F'];
    if (!validCurrencies.includes(convertCurrency)) {
        throw new RangeError('Not a valid currency');
    }
    if (convertCurrency == 'D') {
        newValue = euro * 1.534;
    } else if (convertCurrency == 'L') {
        newValue = euro * 0.774;
    } else if (convertCurrency == 'I') {
        newValue = euro * 161.480;
    } else if (convertCurrency == 'C') {
        newValue = euro * 9.593;
    } else if (convertCurrency == 'F') {
        newValue = euro * 1.601;
    }
    return newValue;
}
*/
//ex.3
/*
export function productDescription(itemCode: number): string {
    const validProducts = [];
    let description: string = '';
    for (let i = 1; i <= 15; i++) {
        validProducts.push(i);
    }
    if (!validProducts.includes(itemCode)) {
        throw new RangeError('Código Inválido');
    }
    if (itemCode == 1) {
        description = 'Alimento não perecível';
    } else if (itemCode <= 4) {
        description = 'Alimento perecível';
    } else if (itemCode <= 6) {
        description = 'Vestuário';
    } else if (itemCode == 7) {
        description = 'Higiene pessoal';
    } else if (itemCode <= 15) {
        description = 'Limpeza e utensílios domésticos'
    }
    return description;
}
*/
//ex.4
/*
export function classificacaoQualitativa(nota: number): string {
    const validNotas = [];
    let qualificacao: string = '';
    for (let i = 0; i <= 20; i++) {
        validNotas.push(i);
    }
    if (!validNotas.includes(nota)) {
        throw new RangeError('Nota Inválida');
    }
    if (nota <= 4) {
        qualificacao = 'Mau';
    } else if (nota <= 9) {
        qualificacao = 'Medíocre';
    } else if (nota <= 13) {
        qualificacao = 'Suficiente';
    } else if (nota <= 17) {
        qualificacao = 'Bom';
    } else if (nota <= 20) {
        qualificacao = 'Muito Bom';
    }
    return qualificacao;
}
*/
//ex.5
/*
export function retencaoSalarial(salarioBruto: number): number {
    let salarioLiquido: number;
    //criar throw para salario abaixo de 0
    if (salarioBruto <= 500) {
        salarioLiquido = salarioBruto - (salarioBruto * 0.1);
    } else if (salarioBruto <= 1000) {
        salarioLiquido = salarioBruto - (salarioBruto * 0.15);
    } else {
        salarioLiquido = salarioBruto - (salarioBruto * 0.2);
    }
    return salarioLiquido;
}
*/
//ex.6

//ex.6.a //my resolution
/*
export function countMultiplesOfThreeInRage_mine(start: number, end: number): number {
        let count: number = 0;
        for (let i = start; i <= end; i++) {
            if (i % 3 == 0) {
                count++;
            }
        }
        return count;
    }
    return countMultiplesOfNumberInRage_mine(3, start, end); //depois de fazer o ex.6.b, voltei aqui e fiz assim
}
*/
/*
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
*/
//ex.6.c //my resolution
/*
export function countMultiplesOfThreeAndFiveInRange_mine(start: number, end: number) {
    let counts: number = countMultiplesOfNumberInRage_mine(3, start, end) + countMultiplesOfNumberInRage_mine(5, start, end);
    return counts;
}
*/
//ex.6.d //my resolution
/*
export function countMultiplesofTwoNumbersInRange_mine(num1: number, num2: number, start: number, end: number) {
    let counts: number = countMultiplesOfNumberInRage_mine(num1, start, end) + countMultiplesOfNumberInRage_mine(num2, start, end);
    return counts;
}
*/
//ex.6.e //my resolution
/*
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
*/
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

//ex.7.c
*/