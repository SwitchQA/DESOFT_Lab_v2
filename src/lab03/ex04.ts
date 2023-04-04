//ex.4
//questions
//1. line 25 & 22 again

export function classificacaoQualitativa(nota: number): string {
    const validNotas = [];
    let qualificacao: string;
    for (let i = 0; i <= 20; i++) {
        validNotas.push(i);
    }
    if (!validNotas.includes(nota)) {
        throw new RangeError('Nota Inválida');
    }
    if (nota <= 4) {
        qualificacao = 'Mau';
    } else if (nota <= 9) {
        qualificacao = 'Medíocre';
    } else if (nota <= 13) {
        qualificacao = 'Suficiente';
    } else if (nota <= 17) {
        qualificacao = 'Bom';
    } else if (nota <= 20) {
        qualificacao = 'Muito Bom';
    }
    return qualificacao!;
}

/*
// can also be with two dimensional array

export function classificacaoQualitativa(nota: number): string {
  const gradeRanges: [number, string][] = [
    [0, 'Nota Inválida'],
    [4, 'Mau'],
    [9, 'Medíocre'],
    [13, 'Suficiente'],
    [17, 'Bom'],
    [20, 'Muito Bom'],
  ];

  const [maxGrade, maxQualification] = gradeRanges[gradeRanges.length - 1];
  if (nota < 0 || nota > maxGrade) {
    throw new RangeError(maxQualification);
  }

  for (let i = 1; i < gradeRanges.length; i++) {
    const [grade, qualification] = gradeRanges[i];
    if (nota <= grade) {
      return qualification;
    }
  }
  
  // Should never get here
  throw new Error('Unexpected error');
}
*/