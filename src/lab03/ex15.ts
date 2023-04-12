/**
 * function will checksum the number on a identity card
 */

export function verificarNumeroBICC(numero: string): boolean {
    // Adicionar o algarismo à direita do número
    const numeroCompleto: string = numero + numero.charAt(1);

    // Calcular a soma ponderada
    let somaPonderada: number = 0;
    for (let i = 0; i < numeroCompleto.length; i++) {
        const algarismo: number = parseInt(numeroCompleto.charAt(i), 10);
        const posicao: number = i + 1;
        somaPonderada += algarismo * posicao;
    }

    // Verificar se a soma ponderada é múltipla de 11
    return somaPonderada % 11 === 0;
}