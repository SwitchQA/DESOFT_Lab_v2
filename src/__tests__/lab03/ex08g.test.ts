import { medianOfDigitsInInteger } from "../../lab03/ex08g";

describe('function should return the median of the digits of the given integer', () => {
    test('should throw error if number is not an integer', () => {
        expect(() => medianOfDigitsInInteger(1.5)).toThrow(); //can i write exceptions like this instead of more lines?
    });
    test('should throw error if number is negative', () => {
        expect(() => medianOfDigitsInInteger(-1)).toThrow();
    });
    test ('should return 1 if number is 1', () => {
        //Arrange
        const number = 1;
        const expectedResult = 1;
        //Act
        const result = medianOfDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('should return 0 if number is 100', () => {
        //Arrange
        const number = 100;
        const expectedResult = 0;
        //Act
        const result = medianOfDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('if number is 255 should return 4', () => {
        //Arrange
        const number = 255;
        const expectedResult = 4;
        //Act
        const result = medianOfDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
}); 