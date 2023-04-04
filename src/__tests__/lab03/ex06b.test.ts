import { countMultiplesofGivenNumberinRange } from "../../lab03/ex06b";

describe('function will count the number of multiples of given number, in given range', () => {
    test('given number 3, given range 1 to 18, should return 3', () => {
        //Arrange   
        const start: number = 1;
        const end: number = 18;
        const num: number = 3;
        const expected: number = 6;
        //Act
        const result: number = countMultiplesofGivenNumberinRange(start, end, num);
        //Assert
        expect(result).toBe(expected);
    });
});