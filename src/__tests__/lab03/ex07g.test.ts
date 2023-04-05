import { medianOfMultiplesInRange } from "../../lab03/ex07g";

describe('function will return the median of the multiples of a given number, in a given range', () => {
    test('should return 7.5 for range [1, 10] and multiple 5', () => {
        //Arrange
        const start: number = 1;
        const end: number = 10;
        const multiple: number = 5;
        const expected: number = 7.5;
        //Act
        const result: number = medianOfMultiplesInRange(start, end, multiple);
        //Assert
        expect(result).toBe(expected);
    });
    test('should throw an error if start is greater than or equal to end', () => {
        expect(() => {
            medianOfMultiplesInRange(10, 1, 5);
        }).toThrow('start cannot be greater than or equal to end');
    });
    test('should throw an error if start is greater than or equal to end', () => {
        expect(() => {
            medianOfMultiplesInRange(10, 10, 5);
        }).toThrow('start cannot be greater than or equal to end');
    });
});