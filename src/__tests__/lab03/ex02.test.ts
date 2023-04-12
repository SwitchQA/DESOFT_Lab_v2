import { cambioCalculator} from "../../lab03/ex02";

describe('cambioCalculator', () => {
    test('Dólar', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'D';
        let expectedResult:number = 0.65;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Libra', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'L';
        let expectedResult:number = 1.29;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Iene', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'I';
        let expectedResult:number = 0.01;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Coroa Sueca', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'C';
        let expectedResult:number = 0.1;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Franco Suiço', () => {
        //Arrange
        const euro:number = 1;
        const convertCurrency:string = 'F';
        let expectedResult:number = 0.62;
        //Act
        let result:number = cambioCalculator(euro, convertCurrency);
        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Wrong currency', () => {
        expect(() => {
            cambioCalculator(1, 'Z');
        }).toThrowError('Not a valid currency');
    });
    test('Negative euro', () => {
        expect(() => {
            cambioCalculator(-1, 'D');
        }).toThrowError('Invalid input');
    });
});