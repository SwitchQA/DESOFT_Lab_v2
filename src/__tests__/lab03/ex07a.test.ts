import { sumOfAllEvenNumbersInRange } from "../../lab03/ex07a";

describe('function will return the sum of all the even numbers in the range', () => {
    test('given range 1 to 10, should return 30', () => {
        //Arrange   
        const start: number = 1;
        const end: number = 10;
        const expected: number = 30;
        //Act
        const result: number = sumOfAllEvenNumbersInRange(start, end);
        //Assert
        expect(result).toBe(expected);
    });
});  