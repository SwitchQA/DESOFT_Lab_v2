import { arrayOfMultiplesOf3InRage } from "../../lab04/ex09";

describe('function will return the multiples of 3, in an array, given a range of numbers', () => {
    test('for range 1 to 10, should return [3, 6, 9]', () => {
        //Arrange
        let start:number = 1;
        let end:number = 10;
        let expected:number[] = [3,6,9];
        //Act
        const result = arrayOfMultiplesOf3InRage(start, end);
        //Assert
        expect(result).toEqual(expected);
    });
});