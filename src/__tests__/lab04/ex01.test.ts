import { countDigits } from "../../lab04/ex01";

describe('function will count the number of digits in given number' , () => {
    test('should return 3 if given 123', () => {
        //Arrange   
        const number = 123;
        const expected = 3;
        //Act
        const result = countDigits(number);
        //Assert
        expect(result).toBe(expected);
    });
});