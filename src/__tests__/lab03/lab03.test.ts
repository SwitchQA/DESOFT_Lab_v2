/* use this for tests

describe('', () => {
    test('', () => {
        //Arrange
        

        //Act
        

        //Assert
        expect(result).toBe(expectedResult);
    });
});

test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateGenderPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });


//ex.1

import { calcFatorial } from "../../lab03/functions";

describe('ex.1: Factorial: ', () => {
    test('1', () => {
        //Arrange
        const num:number = 10
        let expectedResult:number = 10;
        //Act
        let result = calcFatorial(num);
        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.2

import { cambioCalculator } from "../../lab03/functions";

describe ('ex.2: Fazer câmbio de euros para', () => {
    test('Dólar', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'D';
        let expectedResult:number = 1.534;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    })
    test('Libra', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'L';
        let expectedResult:number = 0.774;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    })
    test('Iene', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'I';
        let expectedResult:number = 161.480;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    })
    test('Coroa Sueca', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'C';
        let expectedResult:number = 9.593;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    })
    test('Franco Suiço', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'F';
        let expectedResult:number = 1.601;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    })
    test('Wrong currency', () => {
        expect(() => {
            cambioCalculator(1, 'Z');
        }).toThrow('Not a valid currency');
    });
})

//ex.3

import { productDescription } from "../../lab03/functions";

describe('ex.3: Retorna descrição do produto', () => {
    test('1', () => {
        //Arrange
        const itemCode:number = 1;
        let expectedResult:string = 'Alimento não perecível';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('3', () => {
        //Arrange
        const itemCode:number = 3;
        let expectedResult:string = 'Alimento perecível';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('4', () => {
        //Arrange
        const itemCode:number = 4;
        let expectedResult:string = 'Alimento perecível';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('5', () => {
        //Arrange
        const itemCode:number = 5;
        let expectedResult:string = 'Vestuário';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('5', () => {
        //Arrange
        const itemCode:number = 6;
        let expectedResult:string = 'Vestuário';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('7', () => {
        //Arrange
        const itemCode:number = 7;
        let expectedResult:string = 'Higiene pessoal';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('14', () => {
        //Arrange
        const itemCode:number = 14;
        let expectedResult:string = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('15', () => {
        //Arrange
        const itemCode:number = 15;
        let expectedResult:string = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Código Inválido', () => {
        expect(() => {
            productDescription(16);
        }).toThrow('Código Inválido');
    });
});

//ex.4

import { classificacaoQualitativa } from "../../lab03/functions";

describe('ex.4: Apresenta qualificação da nota', () => {
    test('3', () => {
        //Arrange
        const nota:number = 3;
        let expectedResult:string = 'Mau';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('4', () => {
        //Arrange
        const nota:number = 4;
        let expectedResult:string = 'Mau';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('8', () => {
        //Arrange
        const nota:number = 8;
        let expectedResult:string = 'Medíocre';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('9', () => {
        //Arrange
        const nota:number = 9;
        let expectedResult:string = 'Medíocre';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('12', () => {
        //Arrange
        const nota:number = 12;
        let expectedResult:string = 'Suficiente';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('13', () => {
        //Arrange
        const nota:number = 13;
        let expectedResult:string = 'Suficiente';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('16', () => {
        //Arrange
        const nota:number = 16;
        let expectedResult:string = 'Bom';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('17', () => {
        //Arrange
        const nota:number = 17;
        let expectedResult:string = 'Bom';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('19', () => {
        //Arrange
        const nota:number = 19;
        let expectedResult:string = 'Muito Bom';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('20', () => {
        //Arrange
        const nota:number = 20;
        let expectedResult:string = 'Muito Bom';
        //Act
        let result = classificacaoQualitativa(nota);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('out of range grade', () => {
        expect(() => {
            classificacaoQualitativa(21);
        }).toThrow('Nota Inválida');
    });
});

//ex.5

import { retencaoSalarial } from "../../lab03/functions";

describe('ex.5: Apresenta salário liquido dado salário bruto', () => {
    test('499', () => {
        //Arrange
        const salarioBruto = 499;
        let expectedResult:number = 449.1;
        //Act
        let result = retencaoSalarial(salarioBruto);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('500', () => {
        //Arrange
        const salarioBruto = 500;
        let expectedResult:number = 450;
        //Act
        let result = retencaoSalarial(salarioBruto);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('999', () => {
        //Arrange
        const salarioBruto = 999;
        let expectedResult:number = 849.15;
        //Act
        let result = retencaoSalarial(salarioBruto);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('1000', () => {
        //Arrange
        const salarioBruto = 1000;
        let expectedResult:number = 850;
        //Act
        let result = retencaoSalarial(salarioBruto);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('1001', () => {
        //Arrange
        const salarioBruto = 1001;
        let expectedResult:number = 800.8;
        //Act
        let result = retencaoSalarial(salarioBruto);
        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.6.a
*/
