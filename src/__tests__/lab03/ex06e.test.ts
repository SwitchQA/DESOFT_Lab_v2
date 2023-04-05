import { sumTheMultiplesOfTwoGivenNumbersInRange } from "../../lab03/ex06e";

describe('function will count the number of multiples of two given numbers, in given range', () => {
    test('given number 3, given number 5, given range 1 to 15, should return 3', () => {
        //Arrange   
        const start: number = 1;
        const end: number = 30;
        const num1: number = 3;
        const num2: number = 5;
        const expected: number = 45;
        //Act
        const result: number = sumTheMultiplesOfTwoGivenNumbersInRange(start, end, num1, num2);
        //Assert
        expect(result).toBe(expected);
    });
    test('given number 3, given number 5, given range 1 to 18, should return 3', () => {
        //Arrange   
        const start: number = 1;
        const end: number = 18;
        const num1: number = 0;
        const num2: number = 0;
        const expected: number = 0;
        //Act
        const result: number = sumTheMultiplesOfTwoGivenNumbersInRange(start, end, num1, num2);
        //Assert
        expect(result).toBe(expected);
    });
    test('Start higher than end', () => {
        expect(() => {
            sumTheMultiplesOfTwoGivenNumbersInRange(10, 5, 3, 5);
        }).toThrowError('Start is greater than or equal to end');
    });
    test('Start equal to end', () => {
        expect(() => {
            sumTheMultiplesOfTwoGivenNumbersInRange(10, 10, 3, 5);
        }).toThrowError('Start is greater than or equal to end');
    });
    test('n1 or n2 are negative', () => {
        expect(() => {
            sumTheMultiplesOfTwoGivenNumbersInRange(1, 10, -3, 5);
        }).toThrowError('n1 or n2 are negative');
    });
    test('n1 or n2 are negative', () => {
        expect(() => {
            sumTheMultiplesOfTwoGivenNumbersInRange(1, 10, 3, -5);
        }).toThrowError('n1 or n2 are negative');
    });
});