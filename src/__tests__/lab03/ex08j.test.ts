import { reverseDigitsInInteger } from "../../lab03/ex08j";

describe('function should return the digits given in an integer, in reserve order', () => {
    test('should throw error if number is not an integer', () => {
        expect(() => reverseDigitsInInteger(1.5)).toThrow(); //can i write exceptions like this instead of more lines?
    });
    test('should throw error if number is negative', () => {
        expect(() => reverseDigitsInInteger(-1)).toThrow();
    });
    test ('should return 0 if number is 0', () => {
        //Arrange
        const number = 0;
        const expectedResult = 0;
        //Act
        const result = reverseDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test ('should return 1 if number is 1', () => {
        //Arrange
        const number = 1;
        const expectedResult = 1;
        //Act
        const result = reverseDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test ('should return 987 if number is 789', () => {
        //Arrange
        const number = 789;
        const expectedResult = 987;
        //Act
        const result = reverseDigitsInInteger(number);
        //Assert
        expect(result).toBe(expectedResult);
    });
}); 