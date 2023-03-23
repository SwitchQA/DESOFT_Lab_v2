//ex.1

export function calcularMediaPesada(nota1: number, nota2: number, nota3: number, peso1: number, peso2: number, peso3: number): number {
    let mediaPesada: number = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
    if (peso1 + peso2 + peso3 != 100) {
        throw new RangeError('Total dos pesos deve ser 100%');
    }
    return mediaPesada;
}

//ex.2

export function notaSuperiorOito(nota: number): boolean {
    if (nota >= 8) {
        return true;
    }
    return false;
}

//ex.3

export function calcularDistanciaPontos(x1: number, x2: number, y1: number, y2: number): number {
    let d: number = Math.pow((Math.sqrt(x2 - x1)), 2) + Math.pow((y2 - y1), 2);
    if (x1 == y1 && x2 == y2) {
        throw new RangeError('Pontos iguais, distância zero');
    }
    return d;
}

//ex.4

export function lerTresDigitos(numero: number) {
    let digito3: number = 0;
    let digito2: number = 0;
    let digito1: number = 0;
    if (numero < 100 || numero > 999) {
        console.log('Número não tem 3 dígitos');
        digito1 = -1;
    } else {
        digito3 = Math.floor(numero % 10);
        digito2 = Math.floor((numero / 10) % 10);
        digito1 = Math.floor((numero / 100) % 10);
    }
    return digito1
}

//ex.5

export function ePar(numero: number): boolean {
    let numeroCheck: number = numero % 2
    if (numeroCheck % 2 == 0) {
        console.log('O número é par');
        return true
    } else {
        console.log('O número não é par');
        return false
    }
}

//ex.6

export function calculateFunctionX(numero: number): number {
    let numeroX: number;
    if (numero < 0) {
        numeroX = numero
    } else if (numero > 0) {
        numeroX = numero * 2 - 2 * numero
    } else {
        numeroX = 0
    }
    return numeroX;
}

//ex.7

export function calcularVolumeCubo(area: number): number {
    let volume: number = 0;
    let aresta: number = 0;
    if (area > 0) {
        aresta = Math.sqrt(area / 6);
        volume = Math.pow(aresta, 3);
    } else {
        volume = -1.00;
    }
    return Number(volume.toFixed(2));
}

//ex.7_v2

export function calcularVolumeCubov2(area: number): string {
    let volume: number = 0;
    let aresta: number = 0;
    let outcome: string = '';
    if (area > 0) {
        aresta = Math.sqrt(area / 6);
        volume = Math.pow(aresta, 3);
    } else {
        volume = -1.00;
    }
    if (volume <= 1) {
        outcome = 'Pequeno';
    } else if (volume > 1 && volume <= 2) {
        outcome = 'Médio';
    } else if (volume > 2) {
        outcome = 'Grande';
    }
    return (Number(volume.toFixed(2)) + ' e este volume é considerado: ' + outcome);
}

//ex.8

export function apresentarHorasMinutosSegundos(segundosGiven: number): string {
    let horas: number = 0;
    let minutos: number = 0;
    let segundos: number = 0;
    let output: string = '';
    if (segundosGiven < 0 || segundosGiven > 86400) {
        output = 'Segundos tem de ser positivo e não pode exceder os segundos de um único dia';
    } else {
        horas = Math.floor(segundosGiven / 3600)
        minutos = Math.floor(segundosGiven / 60 - (horas * 60))
        segundos = Math.floor(segundosGiven - (minutos * 60) - (horas * 3600))
        output = 'Txiii, tantos segundos já passaram, já vamos em: ' + horas + ':' + minutos + ':' + segundos;
    }
    return output;
}

//ex.9

export function saudacao(segundosGiven: number): string {
    let output: string = '';
    if (segundosGiven < 0 || segundosGiven > 86400) {
        output = 'Segundos tem de ser positivo e não pode exceder os segundos de um único dia';
    } else if (segundosGiven > 21600 && segundosGiven <= 43201) {
        output = 'Bom dia';
    } else if (segundosGiven > 43201 && segundosGiven <= 72001) {
        output = 'Boa tarde';
    } else {
        output = 'Boa noite';
    }
    return output;

}

//ex.10

export function multiplos(x: number, y: number): boolean {
    let remainder: number = x % y;
    let remainder2: number = y % x;
    if (remainder == 0 || remainder2 == 0) {
        console.log('X e Y são múltiplos um do outro');
        return true;
    } else {
        console.log('X e Y não são múltiplos um do outro');
        return false;
    }
}

//ex.11

export function ordemCrescente(numero: number): boolean {
    let digito1: number = Math.floor(numero / 100);
    let digito2: number = Math.floor(numero % 100 / 10);
    let digito3: number = Math.floor(numero % 10);
    if (numero < 100 || numero > 999)
        throw new RangeError('Apenas número com 3 digitos');
    if (digito1 < digito2 && digito2 < digito3) {
        console.log('A ordem dos digitos é crescente');
        return true;
    } else {
        console.log('A ordem dos digitos não é crescente');
        return false;
    }
}

//ex.12

export function calcularDesconto(preco: number): number {
    let precoComSaldo: number = 0;
    if (preco < 0) {
        throw new RangeError('Preço não pode ser negativo');
    }
    if (preco > 200) {
        precoComSaldo = preco - (preco * 0.6);
    } else if (preco > 100 && preco <= 200) {
        precoComSaldo = preco - (preco * 0.4);
    } else if (preco > 50 && preco <= 100) {
        precoComSaldo = preco - (preco * 0.3);
    } else if (preco <= 50) {
        precoComSaldo = preco - (preco * 0.2);
    }
    return precoComSaldo;
}

//ex.13
// A função serve para devolver o "status" do estado de uma turma, baseado na percentagem de aprovados. 
// Recebe um valor compreendido entre 0 e 1 (não inclusivé), e devolve uma string com a qualificação da turma.

export function checkAprovados(aprovados: number): string {
    let resultado: string = '';
    if (aprovados < 0 || aprovados > 1) {
        resultado = 'Valor inválido';
    } else if (aprovados < 0.2) {
        resultado = 'Turma Má';
    } else if (aprovados < 0.5) {
        resultado = 'Turma Fraca';
    } else if (aprovados < 0.7) {
        resultado = 'Turma Razoável';
    } else if (aprovados < 0.9) {
        resultado = 'Turma Boa';
    } else {
        resultado = 'Turma Excelente';
    }
    return resultado;
}

//ex.14

export function polutionWarning(indicePoluicao: number) {
    let aviso: string = '';
    if (indicePoluicao <= 0.3) {
        aviso = 'Tá tudo bem';
    } else if (indicePoluicao > 0.3 && indicePoluicao <= 0.4) {
        aviso = 'Grupo 1 deve suspender atividades';
    } else if (indicePoluicao > 0.4 && indicePoluicao <= 0.5) {
        aviso = 'Grupo 1 e 2 devem suspender atividades';
    } else if (indicePoluicao > 0.5) {
        aviso = 'Grupo 1, 2 e 3 devem suspender atividades';
    }
    return aviso;


}

//ex.15

export function calcularCustoMaisHoras(areaRelva: number, arvores: number, arbustos: number): string {
    const precoAreaRelva: number = 10; //por m2
    const tempoAreaRelva: number = 300; //segundos por m2
    const precoArvores: number = 20; //cada
    const tempoArvores: number = 600; //segundos por cada
    const precoArbustos: number = 15; //cada
    const tempoArbustos: number = 400; //segundos por cada
    const custoHora: number = 10; //euros
    const custoSegundo: number = custoHora / 3600;
    let segundosTotalAreaRelva: number = (areaRelva * tempoAreaRelva);
    let segundosTotalArvores: number = (arvores * tempoArvores);
    let segundosTotalArbustos: number = (arbustos * tempoArbustos);
    let horasNecessarias: number = (segundosTotalArbustos + segundosTotalAreaRelva + segundosTotalArvores) / 3600;
    let horasNecessariasArredondado = horasNecessarias.toFixed(2);
    let custoItem: number = (areaRelva * precoAreaRelva) + (arvores * precoArvores) + (arbustos * precoArbustos);
    let custoMaoObra: number = (segundosTotalAreaRelva + segundosTotalArvores + segundosTotalArbustos) * custoSegundo;
    let custoTotal: number = custoItem + custoMaoObra;
    let custoTotalArredondado = custoTotal.toFixed(2);
    let custoMaisHoras: string = 'O preço total é: ' + custoTotalArredondado + '€, e vai demorar ' + horasNecessariasArredondado + ' horas.';
    return custoMaisHoras;
}

//ex.16

export function calcularMediaKilometros(milhasDia1: number, milhasDia2: number, milhasDia3: number, milhasDia4: number, milhasDia5: number): number {
    let mediaMilhas: number = (milhasDia1 + milhasDia2 + milhasDia3 + milhasDia4 + milhasDia5) / 5;
    let mediaKilometros: number = mediaMilhas * 1609;
    return mediaKilometros;
}

//ex.17

export function calcularCustoPintura(areaEdificio: number, custoLitroTinta: number, rendimentoLitro: number, salarioDiaPintor: number) {
    const horasTrabalhoPintor = 8; //trabalha horas por dia
    const rendimentoPintor = 2; //m2 por hora
    let pintoresNecessarios: number = 0;
    if (areaEdificio > 0 && areaEdificio < 100) {
        pintoresNecessarios = 1
    } else if (areaEdificio >= 100 && areaEdificio < 300) {
        pintoresNecessarios = 2
    } else if (areaEdificio >= 300 && areaEdificio < 1000) {
        pintoresNecessarios = 3
    } else if (areaEdificio >= 1000) {
        pintoresNecessarios = 4
    }
    let litrosTintaNecessarios: number = areaEdificio / rendimentoLitro;
    let custoTinta: number = litrosTintaNecessarios * custoLitroTinta;
    let horasNecessarias: number = areaEdificio / (rendimentoPintor * pintoresNecessarios);
    let custoPintores: number = (horasNecessarias / horasTrabalhoPintor) * (salarioDiaPintor * pintoresNecessarios);
    let custoTotalPinturaEdificio = custoPintores + custoTinta;
    return Math.floor(custoTotalPinturaEdificio);
}

//ex.18

export function horaChegada(horaPartida: number, minutosPartida: number, HorasDuracaoViagem: number, minutosDuracaoViagem: number): string {
    // adicionar throw back error caso duracao viagem seja superior a 24 horas || minutos superior a 60.
    if (HorasDuracaoViagem > 24 || minutosDuracaoViagem > 60 || HorasDuracaoViagem < 0 || minutosDuracaoViagem < 0 || horaPartida > 24 || minutosPartida > 60) {
        throw new RangeError('Hora deve ser um valor entre 0 e 24. Minutos deve ser um valor entre 0 e 60.');
    }
    let tempoPartidaEmMinutos: number = (horaPartida * 60) + minutosPartida;
    let tempoDuracaoViagemEmMinutos: number = (HorasDuracaoViagem * 60) + minutosDuracaoViagem;
    let outcome: string = '';
    let tempoChegadaEmMinutosTotal: number = tempoPartidaEmMinutos + tempoDuracaoViagemEmMinutos;
    let tempoChegadaEmHoras: number = 0;
    let tempoChegadaEmMinutos: number = 0;
    if (tempoPartidaEmMinutos + tempoDuracaoViagemEmMinutos > 1440) {
        //if (tempoChegadaEmMinutos<=tempoPartidaEmMinutos)
        outcome = 'O comboio chegou no dia seguinte às: '
        tempoChegadaEmHoras = Math.floor(tempoChegadaEmMinutosTotal / 60) - 24
        tempoChegadaEmMinutos = tempoChegadaEmMinutosTotal - (tempoChegadaEmHoras * 60) - 1440;
    } else {
        outcome = 'O comboio chegou no mesmo dia às: '
        tempoChegadaEmHoras = Math.floor(tempoChegadaEmMinutosTotal / 60)
        tempoChegadaEmMinutos = tempoChegadaEmMinutosTotal - (tempoChegadaEmHoras * 60);
    }
    return (outcome + tempoChegadaEmHoras + ':' + tempoChegadaEmMinutos)
    // pode ser melhorado alterando tempoChegadaHoras e tempoChegadaMinutos receber calculo em vez de 0;
}

//ex.19

export function calcularTempoFinalProcessamento(horaInicioProcessamento: number, minutoInicioProcessamento: number, segundoInicioProcessamento: number, tempoSegundosProcessamento: number): string {
    let tempoInicioSegundosTotal: number = (horaInicioProcessamento * 3600) + (minutoInicioProcessamento * 60) + segundoInicioProcessamento;
    let outcome: string = '';
    let tempoFinalProcessamentoSegundos: number = tempoInicioSegundosTotal + tempoSegundosProcessamento;
    let tempoFinalProcessamentoHora: number = Math.floor(tempoFinalProcessamentoSegundos / 3600);
    let tempoFinalProcessamentoMinuto: number = Math.floor((tempoFinalProcessamentoSegundos - (tempoFinalProcessamentoHora * 3600)) / 60);
    let tempoFinalProcessamentoSegundo: number = tempoFinalProcessamentoSegundos - (tempoFinalProcessamentoHora * 3600) - (tempoFinalProcessamentoMinuto * 60);
    if ((tempoFinalProcessamentoSegundos + tempoInicioSegundosTotal) <= 86400) {
        outcome = 'O processamento demorou um dia ou menos e terminou em: ';
    } else {
        ((tempoFinalProcessamentoSegundos + tempoInicioSegundosTotal) > 86400);
        outcome = 'O processamento demorou mais de um dia (compra um novo) e terminou em: ';
        tempoFinalProcessamentoHora = tempoFinalProcessamentoHora - 24;
    }
    return (outcome + tempoFinalProcessamentoHora + ':' + tempoFinalProcessamentoMinuto + ':' + tempoFinalProcessamentoSegundo)
}

//ex.20

export function calcularSalarioSemanal(horasTrabalho: number): number {
    const horasSemanaisTrabalhoNormal: number = 36;
    const eurosHoraNormal: number = 7.5;
    const eurosHoraExtra1: number = 10;
    const eurosHoraExtra2: number = 15;
    let remuneracao = 0;
    let horasTrabalhoExtra = horasTrabalho - horasSemanaisTrabalhoNormal;
    if (horasTrabalho <= 36) {
        remuneracao = eurosHoraNormal * horasTrabalho;
    } else if (horasTrabalho > 36 && horasTrabalho <= 41) {
        remuneracao = (horasSemanaisTrabalhoNormal * eurosHoraNormal) + (horasTrabalhoExtra * eurosHoraExtra1);
    } else if (horasTrabalho > 41) { //make raise exception if bigger than 168.
        remuneracao = (horasSemanaisTrabalhoNormal * eurosHoraNormal) + (5 * eurosHoraExtra1) + ((horasTrabalhoExtra - 5) * eurosHoraExtra2);
    }
    if (horasTrabalho > 168 || horasTrabalho < 0) {
        throw new RangeError('Horas de trabalho não podem exceder 168 semanais, ou ser negativas');
    }
    return remuneracao;
}
