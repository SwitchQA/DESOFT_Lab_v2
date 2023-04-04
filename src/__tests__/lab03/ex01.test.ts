/* use this for tests

describe('', () => {
    test('', () => {
        //Arrange
        

        //Act
        

        //Assert
        expect(result).toBe(expectedResult);
    });
});


test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateGenderPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });
*/

//ex.1

import { calcFatorial } from "../../lab03/ex01";

describe('ex.1: Factorial: ', () => {
    test('5', () => {
        //Arrange
        const num: number = 5
        let expectedResult: number = 120;
        //Act
        let result = calcFatorial(num);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('0', () => {
        //Arrange
        const num: number = 0
        let expectedResult: number = 1;
        //Act
        let result = calcFatorial(num);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('-1', () => {
        expect(() => {
            calcFatorial(-1);
        }).toThrow('Invalid input');
    });
    test('3.5', () => {
        expect(() => {
            calcFatorial(3.5);
        }).toThrow('Invalid input');
    });
    test('1', () => {
        //Arrange
        const num: number = 1
        let expectedResult: number = 1;
        //Act
        let result = calcFatorial(num);
        //Assert
        expect(result).toBe(expectedResult);
    });
});

