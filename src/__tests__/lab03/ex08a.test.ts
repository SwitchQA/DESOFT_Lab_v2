import { countNumberOfAlgarismsInInteger } from "../../lab03/ex08a";

describe('function will count number of algarisms in a integer number', () => {
    test('return 2 if number is 10', () => {
        //Arrange
        const number = 10;
        const expected = 2;
        //Act
        const result = countNumberOfAlgarismsInInteger(number);
        //Assert
        expect(result).toBe(expected);
    });
    test('return 1 if number is 0', () => {
        //Arrange
        const number = 0;
        const expected = 1;
        //Act
        const result = countNumberOfAlgarismsInInteger(number);
        //Assert
        expect(result).toBe(expected);
    });
    test('should throw an error if number is not a integer', () => {
        expect(() => {
            countNumberOfAlgarismsInInteger(10.5);
        }).toThrow('number is not a integer');
    });
    test('should throw an error if number is negative', () => {
        expect(() => {
            countNumberOfAlgarismsInInteger(-10);
        }).toThrow('number is negative');
    });
});