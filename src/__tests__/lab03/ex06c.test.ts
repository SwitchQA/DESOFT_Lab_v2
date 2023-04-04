import { countMultiplesOf3And5InRange } from "../../lab03/ex06c";

describe('function will count the number of multiples of 3 and 5, in given range', () => {
    test('given range 1 to 500, should return 83', () => {
        //Arrange   
        const start: number = 1;
        const end: number = 600;
        const expected: number = 40;
        //Act
        const result: number = countMultiplesOf3And5InRange(start, end);
        //Assert
        expect(result).toBe(expected);
    });
});