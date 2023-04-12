import { isCapicua } from "../../lab03/ex09a";

describe("function returns true if number is capicua", () => {
    test('should return true if number is 212', () => {
        //Arrange
        const number = 212;
        let expected: boolean = true;
        //Act
        const result = isCapicua(number);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return false if number is 123', () => {
        //Arrange
        const number = 123;
        let expected: boolean = false;
        //Act
        const result = isCapicua(number);
        //Assert
        expect(result).toBe(expected);
    });
});