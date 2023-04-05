import { medianOfTwoMultiplesInRange } from "../../lab03/ex07h";

describe('function will return the median of the multiples of two given numbers, in a given range', () => {
    test('should return 7.5 for range [1, 10] and multiples 5 and 3', () => {
        //Arrange
        const start: number = 1;
        const end: number = 10;
        const multiple1: number = 5;
        const multiple2: number = 3;
        const expected: number = 6.75;
        //Act
        const result: number = medianOfTwoMultiplesInRange(start, end, multiple1, multiple2);
        //Assert
        expect(result).toBe(expected);
    });
    test('should throw an error if start is greater than or equal to end', () => {
        expect(() => {
            medianOfTwoMultiplesInRange(10, 1, 5, 3);
        }).toThrow('start cannot be greater than or equal to end');
    });
});