//aqui havia dúvidas novamente, apesar que sei que foi respondido na aula, mas não me lembro bem, se conta multiplos de ambos 3 e 5, ou individualmente. 

export function countMultiplesOf3And5InRange(start: number, end: number): number {
    let count: number = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            count++;
        }
    }
    return count;
}