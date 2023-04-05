import { productOfMultiplesInRange } from "../../lab03/ex07f";

describe('function will return the product of every multiple of a given number, in a given range', () => {
    test('should return 18 for range [1, 6] and multiple 3', () => {
        //Arrange
        const start: number = 1;
        const end: number = 6;
        const multiple: number = 3;
        const expected: number = 18;
        //Act
        const result: number = productOfMultiplesInRange(start, end, multiple);
        //Assert
        expect(result).toBe(expected);
    });
    test('should throw error for range [3, 3] and multiple 3', () => {
        expect(() => {
            productOfMultiplesInRange(3, 3, 3);
        }).toThrow('start cannot be greater than or equal to end');
    });
});