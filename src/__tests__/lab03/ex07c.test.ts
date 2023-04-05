import { sumOfAllOddNumbersInRange } from "../../lab03/ex07c";

describe('function will sum the odd numbers in a range', () => {
    test('should return 36 for range [1, 11]', () => {
        //Arrange
        const start: number = 1;
        const end: number = 11;
        const expected: number = 36;
        //Act
        const result: number = sumOfAllOddNumbersInRange(start, end);
        //Assert
        expect(result).toBe(expected);
    });
});