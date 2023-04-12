import {sumOfAllOddNumbersInArray} from '../../lab04/ex07';

describe("function should return the sum of all odd numbers in an array", () => {
    test('should return 4 for input 1234', () => {
        //Arrange
        let num: number = 1234;
        let expected: number = 4;
        //Act
        let result: number = sumOfAllOddNumbersInArray(num);
        //Assert
        expect(result).toEqual(expected);
    });
});
