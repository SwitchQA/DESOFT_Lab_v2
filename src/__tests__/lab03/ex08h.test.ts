import { medianOfEvenDigitsInInteger } from "../../lab03/ex08h";

describe('function should return the median of the even digits of the given integer', () => {
    test('should throw error if number is not an integer', () => {
        expect(() => medianOfEvenDigitsInInteger(1.5)).toThrow(); //can i write exceptions like this instead of more lines?
    });
    test('should throw error if number is negative', () => {
        expect(() => medianOfEvenDigitsInInteger(-1)).toThrow();
    });
    test ('should return 0 if number is 0', () => {
        //Arrange
        const number = 0;
        const expectedResult = 0;
        //Act
        const result = medianOfEvenDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test ('should return 0 if number is 1', () => {
        //Arrange
        const number = 1;
        const expectedResult = 0;
        //Act
        const result = medianOfEvenDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test ('should return 2 if number is 2', () => {
        //Arrange
        const number = 2;
        const expectedResult = 2;
        //Act
        const result = medianOfEvenDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('if number is 1234567890 should return 4', () => {
        //Arrange
        const number = 1234567890;
        const expectedResult = 4;
        //Act
        const result = medianOfEvenDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('if number is 33579 should return 0', () => {
        //Arrange
        const number = 33579;
        const expectedResult = 0;
        //Act
        const result = medianOfEvenDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
});