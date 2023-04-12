import { getOddDigits } from "../../lab04/ex05";

describe('function should return odd digits from given number', () => {
    test('receiving [1,2,3,4,5,6,7,8,9,10] should return [1,3,5,7,9]', () => {
        //Arrange
        let numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let expected: number[] = [1, 3, 5, 7, 9];
        //Act
        let result: number[] = getOddDigits(numArr);
        //Assert
        expect(result).toEqual(expected);
    });
});