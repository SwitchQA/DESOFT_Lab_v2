import { productDescription } from "../../lab03/ex03";

//isto não seria melhor????
/*
describe('productDescription', () => {
    test('should return a description for a valid product code', () => {
        expect(productDescription(1)).toBe('Alimento não perecível');
        expect(productDescription(2)).toBe('Alimento perecível');
        expect(productDescription(3)).toBe('Alimento perecível');
        expect(productDescription(4)).toBe('Alimento perecível');
        expect(productDescription(5)).toBe('Vestuário');
        expect(productDescription(6)).toBe('Vestuário');
        expect(productDescription(7)).toBe('Higiene pessoal');
        expect(productDescription(8)).toBe('Limpeza e utensílios domésticos');
        expect(productDescription(9)).toBe('Limpeza e utensílios domésticos');
        expect(productDescription(10)).toBe('Limpeza e utensílios domésticos');
        expect(productDescription(11)).toBe('Limpeza e utensílios domésticos');
        expect(productDescription(12)).toBe('Limpeza e utensílios domésticos');
        expect(productDescription(13)).toBe('Limpeza e utensílios domésticos');
        expect(productDescription(14)).toBe('Limpeza e utensílios domésticos');
        expect(productDescription(15)).toBe('Limpeza e utensílios domésticos');
    });
    test('should throw an error for an invalid product code', () => {
        expect(() => productDescription(0)).toThrow(RangeError);
        expect(() => productDescription(16)).toThrow(RangeError);
    });
});
*/

describe ('productDescription', () => {
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 1;
        let expectedResult = 'Alimento não perecível';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 3;
        let expectedResult = 'Alimento perecível';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 4;
        let expectedResult = 'Alimento perecível';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 5;
        let expectedResult = 'Vestuário';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 6;
        let expectedResult = 'Vestuário';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 7;
        let expectedResult = 'Higiene pessoal';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 8;
        let expectedResult = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 9;
        let expectedResult = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 10;
        let expectedResult = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 11;
        let expectedResult = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 12;
        let expectedResult = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 13;
        let expectedResult = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 14;
        let expectedResult = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    }); 
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 15;
        let expectedResult = 'Limpeza e utensílios domésticos';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    }); 
    test('should return a description for a valid product code', () => {
        //Arrange
        let itemCode = 16;
        let expectedResult = 'Código Inválido';
        //Act
        let result = productDescription(itemCode);
        //Assert
        expect(result).toBe(expectedResult);
    }); 
});