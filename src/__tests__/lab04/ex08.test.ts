import { getNFirstElements } from "../../lab04/ex08";

describe('function will return the numbers stored on array, based on nValue, until a maximum of 11 numbers', () => {
    test('should return the first 2 numbers of the array', () => {
        //Arrange
        const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const nValue = 2;
        const expected = [1, 2];
        //Act
        const result = getNFirstElements(numArr, nValue);
        //Assert
        expect(result).toEqual(expected);
    });
    test('should return the first 11 numbers of the array', () => {
        //Arrange
        const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const nValue = 13;
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        //Act
        const result = getNFirstElements(numArr, nValue);
        //Assert
        expect(result).toEqual(expected);
    });
    test('should return the first 11 numbers of the array', () => {
        //Arrange
        const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const nValue = 11;
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        //Act
        const result = getNFirstElements(numArr, nValue);
        //Assert
        expect(result).toEqual(expected);
    });
});