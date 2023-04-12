import { isArmstrong } from "../../lab03/ex09b";

describe('function will take a number and return true if the number is Armstrong', () => {
    test('should return true if given 153', () => {
        //Arrange   
        const number = 153;
        const expected = true;
        //Act
        const result = isArmstrong(number);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return false if given 154', () => {
        //Arrange   
        const number = 154;
        const expected = false;
        //Act
        const result = isArmstrong(number);
        //Assert
        expect(result).toBe(expected);
    });
});  