import { salarioLiquido } from "../../lab03/ex05";

describe('calcular salario liquido', () => {
    test('sendo salario bruto 0', () => {
        expect(() => {
            salarioLiquido(0);
        }).toThrow('Invalid input');
    });
    test('sendo salario bruto -1', () => {
        expect(() => {
            salarioLiquido(-1);
        }).toThrow('Invalid input');
    });
    test('sendo salario bruto 500', () => {
        //Arrange
        const salarioBruto = 500;
        const salarioLiquidoEsperado = 450;
        //Act
        const salarioLiquidoCalculado = salarioLiquido(salarioBruto);
        //Assert
        expect(salarioLiquidoCalculado).toBe(salarioLiquidoEsperado);
    });
    test('sendo salario bruto 501', () => {
        //Arrange
        const salarioBruto = 501;
        const salarioLiquidoEsperado = 425;
        //Act
        const salarioLiquidoCalculado = salarioLiquido(salarioBruto);
        //Assert
        expect(salarioLiquidoCalculado).toBe(salarioLiquidoEsperado);
    });
    test('sendo salario bruto 1000', () => {
        //Arrange
        const salarioBruto = 1000;
        const salarioLiquidoEsperado = 850;
        //Act
        const salarioLiquidoCalculado = salarioLiquido(salarioBruto);
        //Assert
        expect(salarioLiquidoCalculado).toBe(salarioLiquidoEsperado);
    });
    test('sendo salario bruto 1001', () => {
        //Arrange
        const salarioBruto = 1001;
        const salarioLiquidoEsperado = 800;
        //Act
        const salarioLiquidoCalculado = salarioLiquido(salarioBruto);
        //Assert
        expect(salarioLiquidoCalculado).toBe(salarioLiquidoEsperado);
    });
});
