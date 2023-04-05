import { sumOfMultiplesInRange } from "../../lab03/ex07e";

describe('function will sum every number that is multiple of a given number, in a given range', () => {
    test('should return 9 for range [1, 6] and multiple 3', () => {
        //Arrange
        const start: number = 1;
        const end: number = 6;
        const multiple: number = 3;
        const expected: number = 9;
        //Act
        const result: number = sumOfMultiplesInRange(start, end, multiple);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 9 for range [6, 1] and multiple 3', () => {
        //Arrange
        const start: number = 6;
        const end: number = 1;
        const multiple: number = 3;
        const expected: number = 9;
        //Act
        const result: number = sumOfMultiplesInRange(start, end, multiple);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 9 for range [6, 3] and multiple 3', () => {
        //Arrange
        const start: number = 6;
        const end: number = 3;
        const multiple: number = 3;
        const expected: number = 9;
        //Act
        const result: number = sumOfMultiplesInRange(start, end, multiple);
        //Assert
        expect(result).toBe(expected);
    });
    test('should throw error for range [3, 3] and multiple 3', () => { //does this test do anything at all?!
        expect(() => {
            sumOfMultiplesInRange(3, 3, 3);
        }).toThrow('start and end cannot be equal');
    });
});