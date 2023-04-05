import { countNumberOfOddNumbersInRange } from "../../lab03/ex07d";

describe('function will count the number of odd numbers in a range', () => {
    test('should return 3 for range [1, 5]', () => {
        //Arrange
        const start: number = 1;
        const end: number = 5;
        const expected: number = 3;
        //Act
        const result: number = countNumberOfOddNumbersInRange(start, end);
        //Assert
        expect(result).toBe(expected);
    });
});  