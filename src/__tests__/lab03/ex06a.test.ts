import { countMultiplesof3InRange} from "../../lab03/ex06a";

describe('function will count the number of multiples of 3, in given range', () => {
    test('given range 1 to 10, should return 3', () => {
        //Arrange   
        const start: number = 1;
        const end: number = 10;
        const expected: number = 3;
        //Act
        const result: number = countMultiplesof3InRange(start, end);
        //Assert
        expect(result).toBe(expected);
    });
    test('given range 1 to 18, should return 6', () => {
        //Arrange   
        const start: number = 1;
        const end: number = 18;
        const expected: number = 6;
        //Act
        const result: number = countMultiplesof3InRange(start, end);
        //Assert
        expect(result).toBe(expected);
    });
});