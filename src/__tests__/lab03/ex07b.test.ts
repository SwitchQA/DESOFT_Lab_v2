import { countNumberOfEvenNumbersInRange } from "../../lab03/ex07b";

describe('function will count the number of even numbers in a range', () => {
    test('should return 10 for range [1, 20]', () => {
        //Arrange
        const start: number = 1;
        const end: number = 20;
        const expected: number = 10;
        //Act
        const result: number = countNumberOfEvenNumbersInRange(start, end);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 0 for range [1, 1]', () => {
        //Arrange
        const start: number = 1;
        const end: number = 1;
        const expected: number = 0;
        //Act
        const result: number = countNumberOfEvenNumbersInRange(start, end);
        //Assert
        expect(result).toBe(expected);
    });
});
