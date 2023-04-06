import { sumEvenDigitsInGivenInteger } from "../../lab03/ex08e";

describe('function should sum ONLY the even digits in given integer', () => {
    test('should throw error if number is not an integer', () => {
        expect(() => sumEvenDigitsInGivenInteger(1.5)).toThrow(); //can i write exceptions like this instead of more lines?
    });
    test('should throw error if number is negative', () => {
        expect(() => sumEvenDigitsInGivenInteger(-1)).toThrow();
    });
    test ('should return 0 if number is 0', () => {
        //Arrange
        const number = 0;
        const expectedResult = 0;
        //Act
        const result = sumEvenDigitsInGivenInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test ('should return 0 if number is 1', () => {
        //Arrange
        const number = 1;
        const expectedResult = 0;
        //Act
        const result = sumEvenDigitsInGivenInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test ('should return 2 if number is 2', () => {
        //Arrange
        const number = 2;
        const expectedResult = 2;
        //Act
        const result = sumEvenDigitsInGivenInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
});