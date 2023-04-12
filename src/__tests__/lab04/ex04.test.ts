import { getEvenDigits } from "../../lab04/ex04";

describe("function should return even digits from given number", () => {
    test('receiving [1,2,3,4,5,6,7,8,9,10] should return [2,4,6,8,10]', () => {
        //Arrange
        let numArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let expected: number[] = [0, 2, 4, 6, 8, 10];
        //Act
        let result: number[] = getEvenDigits(numArr);
        //Assert
        expect(result).toEqual(expected);
    });
    test('should return an empty array for an empty input array', () => {
        const input: number[] = [];
        const expectedOutput: number[] = [];
        expect(getEvenDigits(input)).toEqual(expectedOutput);
    });
    test('should return an empty array for an input array with no even numbers', () => {
        const input: number[] = [1, 3, 5, 7, 9];
        const expectedOutput: number[] = [];
        expect(getEvenDigits(input)).toEqual(expectedOutput);
    });
    test('should not return an array containing undefined', () => {
        const input: number[] = [1, 2, 3, 4, 5, 6];
        const output = getEvenDigits(input);
        expect(output).not.toContain(undefined);
    });

});