import { classificacaoQualitativa } from "../../lab03/ex04";

describe("classificacaoQualitativa", () => {
    test('should throw an error if the grade is greater than 20', () => {
        expect(() => {
            classificacaoQualitativa(21);
        }).toThrow('Nota Inválida');
    });
    test('should throw an error if the grade is less than 0', () => {
        expect(() => {
            classificacaoQualitativa(-1);
        }).toThrow('Nota Inválida');
    });
    test("should return 'Mau' if the grade is less than or equal to 4", () => {
        // Arrange
        const grade = 4;
        // Act
        const result = classificacaoQualitativa(grade);
        // Assert
        expect(result).toBe('Mau');
    });
    test("should return 'Medíocre' if the grade is less than or equal to 9", () => {
        // Arrange
        const grade = 9;
        // Act
        const result = classificacaoQualitativa(grade);
        // Assert
        expect(result).toBe('Medíocre');
    });
    test("should return 'Suficiente' if the grade is less than or equal to 13", () => {
        // Arrange
        const grade = 13;
        // Act
        const result = classificacaoQualitativa(grade);
        // Assert
        expect(result).toBe('Suficiente');
    });
    test("should return 'Bom' if the grade is less than or equal to 17", () => {
        // Arrange
        const grade = 17;
        // Act
        const result = classificacaoQualitativa(grade);
        // Assert
        expect(result).toBe('Bom');
    });
    test("should return 'Muito Bom' if the grade is less than or equal to 20", () => {
        // Arrange
        const grade = 20;
        // Act
        const result = classificacaoQualitativa(grade);
        // Assert
        expect(result).toBe('Muito Bom');
    });
});