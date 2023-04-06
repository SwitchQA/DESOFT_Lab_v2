import { countOddNumbersInInteger } from "../../lab03/ex08c";

describe('function should count even numbers in a integer number', () => {
    test('should return number is negative', () => {
        expect (() => {
            countOddNumbersInInteger(-1);
        }).toThrowError('number is negative');
    });
    test('should return number is not an integer', () => {
        expect (() => {
            countOddNumbersInInteger(1.1);
        }).toThrowError('number is not an integer');
    });
    test('should return 0 if number is 0', () => {
        //Arrange
        const number = 0;
        const expectedResult = 0;
        //Act
        const result = countOddNumbersInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return 1 if number is 3', () => {
        //Arrange
        const number = 3;
        const expectedResult = 1;
        //Act
        const result = countOddNumbersInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return 0 if number is 2', () => {
        //Arrange
        const number = 2;
        const expectedResult = 0;
        //Act
        const result = countOddNumbersInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
});