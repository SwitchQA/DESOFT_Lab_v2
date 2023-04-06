import { sumOfAllAlgarismsInInteger } from "../../lab03/ex08d";

describe('function will sum all algarisms in given integer', () => {
    test('should return number is negative', () => {
        expect (() => {
            sumOfAllAlgarismsInInteger(-1);
        }).toThrowError('number is negative');
    });
    test('should return number is not an integer', () => {
        expect (() => {
            sumOfAllAlgarismsInInteger(1.1);
        }).toThrowError('number is not an integer');
    });
    test('should return 0 if number is 0', () => {
        //Arrange
        const number = 0;
        const expectedResult = 0;
        //Act
        const result = sumOfAllAlgarismsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return 1 if number is 1', () => {
        //Arrange
        const number = 1;
        const expectedResult = 1;
        //Act
        const result = sumOfAllAlgarismsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
});   