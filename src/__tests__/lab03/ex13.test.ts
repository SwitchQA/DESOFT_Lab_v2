import { countSums } from "../../lab03/ex13";

describe("function will return the number(count) of possible sums (using two numbers ranging from 0-10) to obtain a number given", () => {
    test('should throw error if number is 0', () => {
        expect (() => countSums(0)).toThrowError("Number must be within range 1-20");
    });
    test('should throw error if number is 21', () => {
        expect (() => countSums(21)).toThrowError("Number must be within range 1-20");
    });
    test('for number 1 should return 1', () => {
        //Arrange
        const number = 1;
        let expected: number = 1;
        //Act
        const result = countSums(number);
        //Assert
        expect(result).toBe(expected);
    });
    test('for number 5 should return 3', () => {
        //Arrange
        const number = 5;
        let expected: number = 3;
        //Act
        const result = countSums(number);
        //Assert
        expect(result).toBe(expected);
    });
    test('for number 10 should return 4', () => {
        //Arrange
        const number = 10;
        let expected: number = 6;
        //Act
        const result = countSums(number);
        //Assert
        expect(result).toBe(expected);
    });
    test('for number 20 should return 1', () => {
        //Arrange
        const number = 20;
        let expected: number = 1;
        //Act
        const result = countSums(number);
        //Assert
        expect(result).toBe(expected);
    });
}); 