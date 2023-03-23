//ex.1
//este algoritmo

export function calcAlgoritmo(num: number): number {
    let res: number = 1;
    let x: number;
    for (x = num; x >= 1; x--) {
        res = res * x;
    }
    return res
}

//ex.2

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

//ex.3

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

//ex.4

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

//ex.5

export function retencaoSalarial(salarioBruto: number): number {
    let salarioLiquido: number;
    if (salarioBruto <= 500) {
        salarioLiquido = salarioBruto - (salarioBruto * 0.1);
    } else if (salarioBruto <= 1000) {
        salarioLiquido = salarioBruto - (salarioBruto * 0.15);
    } else {
        salarioLiquido = salarioBruto - (salarioBruto * 0.2);
    }
    return salarioLiquido;
}