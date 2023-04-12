import { sumOfAllEvenNumbersInArray } from "../../lab04/ex06";

describe("function should return the sum of all even numbers in an array", () => {
    test('should return 6 for input 1234', () => {
        //Arrange
        let num: number = 1234;
        let expected: number = 6;
        //Act
        let result: number = sumOfAllEvenNumbersInArray(num);
        //Assert
        expect(result).toEqual(expected);
    });
    test('should return 6 for input 12345', () => {
        //Arrange
        let num: number = 2345;
        let expected: number = 6;
        //Act
        let result: number = sumOfAllEvenNumbersInArray(num);
        //Assert
        expect(result).toEqual(expected);
    });
});