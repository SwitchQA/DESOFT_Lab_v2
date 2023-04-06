import { medianOfOddDigitsInInteger } from "../../lab03/ex08i";

describe('function should return the median of the odd digits of the given integer', () => {
    test('should throw error if number is not an integer', () => {
        expect(() => medianOfOddDigitsInInteger(1.5)).toThrow(); //can i write exceptions like this instead of more lines?
    });
    test('should throw error if number is negative', () => {
        expect(() => medianOfOddDigitsInInteger(-1)).toThrow();
    });
    test ('should return 0 if number is 0', () => {
        //Arrange
        const number = 0;
        const expectedResult = 0;
        //Act
        const result = medianOfOddDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test ('should return 1 if number is 1', () => {
        //Arrange
        const number = 1;
        const expectedResult = 1;
        //Act
        const result = medianOfOddDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test ('should return 0 if number is 2', () => {
        //Arrange
        const number = 2;
        const expectedResult = 0;
        //Act
        const result = medianOfOddDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('if number is 33579 should return 0', () => {
        //Arrange
        const number = 33579;
        const expectedResult = 5;
        //Act
        const result = medianOfOddDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
});