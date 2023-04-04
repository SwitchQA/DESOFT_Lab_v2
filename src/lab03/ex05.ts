//ex.5

export function salarioLiquido(salarioBruto: number): number {
    
    if (salarioBruto <= 0) {
        throw new Error('Invalid input');
    } 
    let salarioLiquido: number = salarioBruto - retencaoSalarial(salarioBruto);
    return Math.trunc(salarioLiquido);
      
}

function retencaoSalarial(salarioBruto: number): number {
    let retencao: number;

    if (salarioBruto <= 500) {
        retencao = salarioBruto * 0.1;
    } else if (salarioBruto <= 1000) {
        retencao = salarioBruto * 0.15;
    } else {
        retencao = salarioBruto * 0.2;
    }
    return retencao;
}
