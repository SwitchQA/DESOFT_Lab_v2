import { countEvenNumbersInInteger } from "../../lab03/ex08b";

describe('function should count even numbers in a integer number', () => {
    test('should return number is negative', () => {
        expect (() => {
            countEvenNumbersInInteger(-1);
        }).toThrowError('number is negative');
    });
    test('should return number is not an integer', () => {
        expect (() => {
            countEvenNumbersInInteger(1.1);
        }).toThrowError('number is not an integer');
    });
    test('should return 0 if number is 0', () => {
        //Arrange
        const number = 0;
        const expectedResult = 0;
        //Act
        const result = countEvenNumbersInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return 1 if number is 2', () => {
        //Arrange
        const number = 2;
        const expectedResult = 1;
        //Act
        const result = countEvenNumbersInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return 0 if number is 1', () => {
        //Arrange
        const number = 1;
        const expectedResult = 0;
        //Act
        const result = countEvenNumbersInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
});