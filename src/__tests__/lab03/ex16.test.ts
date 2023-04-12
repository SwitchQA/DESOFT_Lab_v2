import { reArrangeDigits } from "../../lab03/ex16";

describe('function will return odd numbers first, and even numbers last', () => {
    test('should return 2497 if given 9247', () => {
        //Arrange   
        const number = "9247";
        const expected = "9724";
        //Act
        const result = reArrangeDigits(number);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 0 if given 0', () => {
        //Arrange   
        const number = "0";
        const expected = "0";
        //Act
        const result = reArrangeDigits(number);
        //Assert
        expect(result).toBe(expected);
    });
    test('should throw error if given -1', () => {
        expect(() => {
            reArrangeDigits("-1");
        }).toThrow();
    });
});