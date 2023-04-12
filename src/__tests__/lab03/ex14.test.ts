import { dogFood } from "../../lab03/ex14";

describe('function will receive the weight of the dog and the amount of food', () => {
    test('should throw error if weight is less than 0', () => {
        expect(() => dogFood(-1, 100)).toThrowError("number is negative");
    });
    test('should throw error if food is less than 0', () => {
        expect(() => dogFood(10, -1)).toThrowError("number is negative");
    });
    test('should return 0 if the amount of food is 100 for 9 kg dog', () => {
        //Arrange
        const weight = 9;
        const food = 100;
        let expected: number = 0;
        //Act
        const result = dogFood(weight, food);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 1 if the amount of food is 500 for 9 kg dog', () => {
        //Arrange
        const weight = 9;
        const food = 500;
        let expected: number = 1;
        //Act
        const result = dogFood(weight, food);
        //Assert
        expect(result).toBe(expected);
    });
    test('should -1 if the amount of food is 50 for 9 kg dog', () => {
        //Arrange
        const weight = 9;
        const food = 50;
        let expected: number = -1;
        //Act
        const result = dogFood(weight, food);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 0 if the amount of food is 250 for 20 kg dog', () => {
        //Arrange
        const weight = 20;
        const food = 250;
        let expected: number = 0;
        //Act
        const result = dogFood(weight, food);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 0 is the amount of food is 300 for 30 kg dog', () => {
        //Arrange
        const weight = 30;
        const food = 300;
        let expected: number = 0;
        //Act
        const result = dogFood(weight, food);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 0 if the amount of food is 500 for 50 kg dog', () => {
        //Arrange
        const weight = 50;
        const food = 500;
        let expected: number = 0;
        //Act
        const result = dogFood(weight, food);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 0 if the amount of food is 250 for 10 kg dog', () => {
        //Arrange
        const weight = 10;
        const food = 250;
        let expected: number = 0;
        //Act
        const result = dogFood(weight, food);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 0 if the amount of food is 300 for 25 kg dog', () => {
        //Arrange
        const weight = 25;
        const food = 300;
        let expected: number = 0;
        //Act
        const result = dogFood(weight, food);
        //Assert
        expect(result).toBe(expected);
    });
    test('should return 0 if the amount of food is 500 for 45 kg dog', () => {
        //Arrange
        const weight = 45;
        const food = 500;
        let expected: number = 0;
        //Act
        const result = dogFood(weight, food);
        //Assert
        expect(result).toBe(expected);
    });
});  
