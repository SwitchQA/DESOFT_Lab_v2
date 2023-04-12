import { sumDigits } from "../../lab04/ex03";

describe('function will take a number, and return the sum of the digits in the number', () => {
    test('should return 10 if given 1234', () => {
        //Arrange
        let num: number[] = [1,2,3,4];
        let expected: number = 10;
        //Act
        let result: number = sumDigits(num);
        //Assert
        expect(result).toBe(expected);
    });
});