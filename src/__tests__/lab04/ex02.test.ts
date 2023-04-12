import { storeDigits } from "../../lab04/ex02";

describe('function will take a number, and store each digit in an array', () => {
    test('should return an array with 1234 as [1,2,3,4]', () => {
        //Arrange
        let num: number = 1234;
        let expected: number[] = [1,2,3,4];
        //Act
        let result: number[] = storeDigits(num);
        //Assert
        expect(result).toEqual(expected);
    });
});  