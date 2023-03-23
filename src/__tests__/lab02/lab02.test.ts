/* use this for tests

describe('', () => {
    test('', () => {
        //Arrange
        

        //Act
        

        //Assert
        
    });
});

test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateGenderPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });
*/

//ex.1

import { calcularMediaPesada } from "../../lab02/functions";

describe('calcularMediaPesada', () => {
    test('Teste 1 com peso 20%, Teste 2 com peso 20%, Teste 3 com peso 60%. Notas foram', () => {
        //Arrange
        const nota1: number = 15;
        const nota2: number = 20;
        const nota3: number = 16;
        const peso1: number = 20;
        const peso2: number = 20;
        const peso3: number = 60;
        const expectedMediaPesada: number = 16.6;

        //Act
        let mediaPesada = calcularMediaPesada(nota1, nota2, nota3, peso1, peso2, peso3)

        //Assert
        expect(mediaPesada).toBe(expectedMediaPesada);
        expect(peso1 + peso2 + peso3).toBe(100);
    });
    test('Nota exceder 20', () => {
        expect(() => {
            calcularMediaPesada(25, 25, 25, 10, 10, 80);
        }).toThrow('Nota não pode exceder 20 ou ser menor que zero');
    });
    test('Nota ser menor que 0', () => {
        expect(() => {
            calcularMediaPesada(-2, 25, 25, 10, 10, 80);
        }).toThrow('Nota não pode exceder 20 ou ser menor que zero');
    });
    test('Pesos não equivalarem a 100%', () => {
        expect(() => {
            calcularMediaPesada(-2, 25, 25, 5, 10, 80);
        }).toThrow('Total dos pesos deve ser 100%');
    });
});

//ex.2

import { notaSuperiorOito } from "../../lab02/functions";

describe('ex.2, verificar se nota é superior a oito', () => {
    test('nota = 9', () => {
        //Arrange
        let nota: number = 9;
        let expectedResult: boolean = true;

        //Act
        let result = notaSuperiorOito(nota);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('nota = 9', () => {
        //Arrange
        let nota: number = 7;
        let expectedResult: boolean = false;

        //Act
        let result = notaSuperiorOito(nota);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.3

import { calcularDistanciaPontos } from "../../lab02/functions";

describe('ex.3, Calcular distância entre dois pontos num plano', () => {
    test('x1 = 2, x2 = 2 & y1 = 5, y2 = 7', () => {
        //Arrange
        let x1: number = 2;
        let x2: number = 2;
        let y1: number = 5;
        let y2: number = 7;
        let expectedD = 4;

        //Act
        let d: number = calcularDistanciaPontos(x1, x2, y1, y2);

        //Assert
        expect(d).toBe(expectedD);
    });
    test('Pontos iguais', () => {
        expect(() => {
            calcularDistanciaPontos(2, 2, 2, 2);
        }).toThrow('Pontos iguais, distância zero');
    });
});


//ex.4

import { lerTresDigitos } from "../../lab02/functions";

describe('ex.4, Ler três digitos, retorna digito 1', () => {
    test('568', () => {
        //Arrange
        let numero: number = 568;
        let expectedResult: number = 5;

        //Act
        let result: number = lerTresDigitos(numero);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('56', () => {
        //Arrange
        let numero: number = 56;
        let expectedResult: number = -1;

        //Act
        let result: number = lerTresDigitos(numero);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('100', () => {
        //Arrange
        let numero: number = 100;
        let expectedResult: number = -1;

        //Act
        let result: number = lerTresDigitos(numero);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('999', () => {
        //Arrange
        let numero: number = 999;
        let expectedResult: number = -1;

        //Act
        let result: number = lerTresDigitos(numero);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.5

import { ePar } from "../../lab02/functions";

describe('ex.5, Verificar se número é par', () => {
    test('7', () => {
        //Arrange
        let number: number = 7;
        let expectedResult: boolean = false;

        //Act
        let result: boolean = ePar(number);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('8', () => {
        //Arrange
        let number: number = 8;
        let expectedResult: boolean = true;

        //Act
        let result: boolean = ePar(number);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('0', () => {
        //Arrange
        let number: number = 0;
        let expectedResult: boolean = true;

        //Act
        let result: boolean = ePar(number);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.6

import { calculateFunctionX } from "../../lab02/functions";

describe('ex.6, Caculcar Função X', () => {
    test('Sendo x = -1', () => {
        //Arrange
        let number: number = -1;
        let expectedResult: number = -1;

        //Act
        let result: number = calculateFunctionX(number);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Sendo x = 0', () => {
        //Arrange
        let number: number = 0;
        let expectedResult: number = 0;

        //Act
        let result: number = calculateFunctionX(number);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Sendo x = 4', () => {
        //Arrange
        let number: number = 4;
        let expectedResult: number = 0;

        //Act
        let result: number = calculateFunctionX(number);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.7

import { calcularVolumeCubo } from "../../lab02/functions";

describe('ex.7, Calcular volume do cubo a partir da área', () => {
    test('área = 5', () => {
        //Arrange
        let area: number = 5;
        let expectedVolume = 0.76;

        //Act
        let volume: number = calcularVolumeCubo(area);

        //Assert
        expect(volume).toBe(expectedVolume);
    });
    test('área = 5', () => {
        //Arrange
        let area: number = 0;
        let expectedVolume = -1.00;

        //Act
        let volume: number = calcularVolumeCubo(area);

        //Assert
        expect(volume).toBe(expectedVolume);
    });
});

//ex.7_v2

import { calcularVolumeCubov2 } from "../../lab02/functions";

describe('ex.7_v2, Calcular volume do cubo a partir da área', () => {
    test('área = 5', () => {
        //Arrange
        let area: number = 5;
        let expectedVolume: string = '0.76 e este volume é considerado: Pequeno';

        //Act
        let volume: string = calcularVolumeCubov2(area);

        //Assert
        expect(volume).toBe(expectedVolume);

    });
    test('área = 7', () => {
        //Arrange
        let area: number = 7;
        let expectedVolume: string = '1.26 e este volume é considerado: Médio';

        //Act
        let volume: string = calcularVolumeCubov2(area);

        //Assert
        expect(volume).toBe(expectedVolume);

    });
    test('área = 12', () => {
        //Arrange
        let area: number = 12;
        let expectedVolume: string = '2.83 e este volume é considerado: Grande';

        //Act
        let volume: string = calcularVolumeCubov2(area);

        //Assert
        expect(volume).toBe(expectedVolume);

    });
    test('área = 0', () => {
        //Arrange
        let area: number = 0;
        let expectedVolume: string = '-1 e este volume é considerado: Pequeno';

        //Act
        let volume: string = calcularVolumeCubov2(area);

        //Assert
        expect(volume).toBe(expectedVolume);
    });
});

//ex.8

import { apresentarHorasMinutosSegundos } from "../../lab02/functions";

describe('ex.8, Apresentar horas minutos e segundos, dados total segundos', () => {
    test('segundos = 86500', () => {
        //Arrange
        let segundos = 86500;
        let expectedResult: string = 'Segundos tem de ser positivo e não pode exceder os segundos de um único dia';

        //Act
        let result: string = apresentarHorasMinutosSegundos(segundos);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('segundos = 86500', () => {
        //Arrange
        let segundos = 56000;
        let expectedResult: string = 'Txiii, tantos segundos já passaram, já vamos em: 15:33:20';

        //Act
        let result: string = apresentarHorasMinutosSegundos(segundos);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex. 9

import { saudacao } from "../../lab02/functions";

describe('ex.9, ', () => {
    test('Mais de 24h em segundos', () => {
        //Arrange
        let segundos: number = 86500;
        let expectedResult: string = 'Segundos tem de ser positivo e não pode exceder os segundos de um único dia'

        //Act
        let result: string = saudacao(segundos);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('22000 segundos', () => {
        //Arrange
        let segundos: number = 22000;
        let expectedResult: string = 'Bom dia'

        //Act
        let result: string = saudacao(segundos);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('44000 segundos', () => {
        //Arrange
        let segundos: number = 44000;
        let expectedResult: string = 'Boa tarde'

        //Act
        let result: string = saudacao(segundos);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('80000 segundos', () => {
        //Arrange
        let segundos: number = 80000;
        let expectedResult: string = 'Boa noite'

        //Act
        let result: string = saudacao(segundos);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.10

import { multiplos } from "../../lab02/functions";

describe('ex.10, Verificar se dois nºs são múltiplos', () => {
    test('2 e 5', () => {
        //Arrange
        let x: number = 2;
        let y: number = 5;
        let expectedResult: boolean = false

        //Act
        let result: boolean = multiplos(x, y);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('4 e 20', () => {
        //Arrange
        let x: number = 4;
        let y: number = 20;
        let expectedResult: boolean = true

        //Act
        let result: boolean = multiplos(x, y);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.11

import { ordemCrescente } from "../../lab02/functions";

describe('ex.11, Verificar se dado um nº de 3 digitos, a sua ordem é crescente', () => {
    test('568', () => {
        //Arrange
        let number: number = 568;
        let expectedResult: boolean = true;

        //Act
        let result: boolean = ordemCrescente(number);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('968', () => {
        //Arrange
        let number: number = 968;
        let expectedResult: boolean = false;

        //Act
        let result: boolean = ordemCrescente(number);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Número com mais ou menos que 3 digitos', () => {
        expect(() => {
            ordemCrescente(4585);
            ordemCrescente(45);
        }).toThrow('Apenas número com 3 digitos');
    });
});

//ex.12

import { calcularDesconto } from "../../lab02/functions";

describe('ex.12, Calcular desconto dado o preço', () => {
    test('Preço = 45', () => {
        //Arrange
        let preco: number = 45;
        let expectedResult: number = 36;

        //Act
        let result: number = calcularDesconto(preco);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Preço = 60', () => {
        //Arrange
        let preco: number = 60;
        let expectedResult: number = 42;

        //Act
        let result: number = calcularDesconto(preco);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Preço = 150', () => {
        //Arrange
        let preco: number = 150;
        let expectedResult: number = 90;

        //Act
        let result: number = calcularDesconto(preco);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Preço = 300', () => {
        //Arrange
        let preco: number = 300;
        let expectedResult: number = 120;

        //Act
        let result: number = calcularDesconto(preco);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Preço menor que zero', () => {
        expect(() => {
            calcularDesconto(0);
        }).toThrow('Preço não pode ser negativo');
    });
});

//ex.13

import { checkAprovados } from "../../lab02/functions";

describe('ex.13, Verificar status de uma turma baseado no nº de aprovados', () => {
    test('-1', () => {
        //Arrange
        let aprovados: number = -1;
        let expectedResult: string = 'Valor inválido';

        //Act
        let result: string = checkAprovados(aprovados);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('0.1', () => {
        //Arrange
        let aprovados: number = 0.1;
        let expectedResult: string = 'Turma Má';

        //Act
        let result: string = checkAprovados(aprovados);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('0.4', () => {
        //Arrange
        let aprovados: number = 0.4;
        let expectedResult: string = 'Turma Fraca';

        //Act
        let result: string = checkAprovados(aprovados);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('0.6', () => {
        //Arrange
        let aprovados: number = 0.6;
        let expectedResult: string = 'Turma Razoável';

        //Act
        let result: string = checkAprovados(aprovados);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('0.8', () => {
        //Arrange
        let aprovados: number = 0.8;
        let expectedResult: string = 'Turma Boa';

        //Act
        let result: string = checkAprovados(aprovados);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('1', () => {
        //Arrange
        let aprovados: number = 1;
        let expectedResult: string = 'Turma Excelente';

        //Act
        let result: string = checkAprovados(aprovados);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex. 14

import { polutionWarning } from "../../lab02/functions";

describe('ex.14, Aviso de poluição baseado em indice', () => {
    test('Indice 0.3', () => {
        //Arrange
        let indicePoluicao: number = 0.3;
        let expectedResult: string = 'Tá tudo bem';

        //Act
        let result: string = polutionWarning(indicePoluicao);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Indice 0.4', () => {
        //Arrange
        let indicePoluicao: number = 0.4;
        let expectedResult: string = 'Grupo 1 deve suspender atividades';

        //Act
        let result: string = polutionWarning(indicePoluicao);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Indice 0.5', () => {
        //Arrange
        let indicePoluicao: number = 0.5;
        let expectedResult: string = 'Grupo 1 e 2 devem suspender atividades';

        //Act
        let result: string = polutionWarning(indicePoluicao);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Indice 0.6', () => {
        //Arrange
        let indicePoluicao: number = 0.6;
        let expectedResult: string = 'Grupo 1, 2 e 3 devem suspender atividades';

        //Act
        let result: string = polutionWarning(indicePoluicao);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.15

import { calcularCustoMaisHoras } from "../../lab02/functions";

describe('ex.15, Calcular custo materiais + mão de obra', () => {
    test('Area da relva: 50 m2; nº de árvores: 5; nº de arbustos: 20', () => {
        //Arrange
        let areaRelva: number = 2;
        let nArvores: number = 5;
        let nArbustos: number = 20;
        let expectedResult: string = 'O preço total é: 452.22€, e vai demorar 3.22 horas.';

        //Act
        let result: string = calcularCustoMaisHoras(areaRelva, nArvores, nArbustos);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.16

import { calcularMediaKilometros } from "../../lab02/functions";

describe('ex.16, Calcular média em kilómetros', () => {
    test('Milhas: 2 + 6 + 9 + 7 + 8', () => {
        //Arrange
        let milhasDia1: number = 2;
        let milhasDia2: number = 6;
        let milhasDia3: number = 9;
        let milhasDia4: number = 7;
        let milhasDia5: number = 8;
        let expectedResult: number = 10297.6;

        //Act
        let result: number = calcularMediaKilometros(milhasDia1, milhasDia2, milhasDia3, milhasDia4, milhasDia5);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.17

import { calcularCustoPintura } from "../../lab02/functions";

describe('ex.17, Calcular custo pintura edificio', () => {
    test('Dados 50m2 edificio, 5.5€ custo litro tinta, rendimento/litro da tinta 3 m2/litro, e 50€ dia cada pintor', () => {
        //Arrange
        let areaEdificio: number = 50;
        let custoLitroTinta: number = 5.5;
        let rendimentoLitro: number = 3;
        let salarioDiaPintor: number = 50;
        let expectedResult: number = 247;

        //Act
        let result: number = calcularCustoPintura(areaEdificio, custoLitroTinta, rendimentoLitro, salarioDiaPintor);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Dados 150m2 edificio, 5.5€ custo litro tinta, rendimento/litro da tinta 3 m2/litro, e 50€ dia cada pintor', () => {
        //Arrange
        let areaEdificio: number = 150;
        let custoLitroTinta: number = 5.5;
        let rendimentoLitro: number = 3;
        let salarioDiaPintor: number = 50;
        let expectedResult: number = 743;

        //Act
        let result: number = calcularCustoPintura(areaEdificio, custoLitroTinta, rendimentoLitro, salarioDiaPintor);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Dados 350m2 edificio, 5.5€ custo litro tinta, rendimento/litro da tinta 3 m2/litro, e 50€ dia cada pintor', () => {
        //Arrange
        let areaEdificio: number = 350;
        let custoLitroTinta: number = 5.5;
        let rendimentoLitro: number = 3;
        let salarioDiaPintor: number = 50;
        let expectedResult: number = 1735;

        //Act
        let result: number = calcularCustoPintura(areaEdificio, custoLitroTinta, rendimentoLitro, salarioDiaPintor);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Dados 1500m2 edificio, 5.5€ custo litro tinta, rendimento/litro da tinta 3 m2/litro, e 50€ dia cada pintor', () => {
        //Arrange
        let areaEdificio: number = 1500;
        let custoLitroTinta: number = 5.5;
        let rendimentoLitro: number = 3;
        let salarioDiaPintor: number = 50;
        let expectedResult: number = 7437;

        //Act
        let result: number = calcularCustoPintura(areaEdificio, custoLitroTinta, rendimentoLitro, salarioDiaPintor);

        //Assert
        expect(result).toBe(expectedResult);
    });
});


//ex.18

import { horaChegada } from "../../lab02/functions";

describe('ex.18, Calcular hora de chegada com base na hora da partida e duração da viagem', () => {
    test('Dado saída às 10:50, e duração 5h:10m', () => {
        //Arrange
        let horaPartida: number = 10;
        let minutosPartida: number = 50;
        let HorasDuracaoViagem: number = 5;
        let minutosDuracaoViagem: number = 10;
        let expectedResult: string = 'O comboio chegou no mesmo dia às: 16:0';

        //Act
        let result: string = horaChegada(horaPartida, minutosPartida, HorasDuracaoViagem, minutosDuracaoViagem);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Dado saída às 23:50, e duração 5h:10m', () => {
        //Arrange
        let horaPartida: number = 23;
        let minutosPartida: number = 50;
        let HorasDuracaoViagem: number = 5;
        let minutosDuracaoViagem: number = 10;
        let expectedResult: string = 'O comboio chegou no dia seguinte às: 5:0';

        //Act
        let result: string = horaChegada(horaPartida, minutosPartida, HorasDuracaoViagem, minutosDuracaoViagem);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Horas superior a 24 ou minutos superior a 60', () => {
        expect(() => {
            horaChegada(22, 20, 25, 60);
            horaChegada(22, 20, 20, 70);
            horaChegada(22, 20, -2, 60);
            horaChegada(25, 20, 20, 60);
        }).toThrow('Hora deve ser um valor entre 0 e 24. Minutos deve ser um valor entre 0 e 60.');
    })
});


//ex.19

import { calcularTempoFinalProcessamento } from "../../lab02/functions";

describe('ex.19, Calcular tempo final de processamento', () => {
    test('Dado que a tarefa demorou 5000 segundos', () => {
        //Arrange
        let horaInicioProcessamento: number = 10;
        let minutoInicioProcessamento: number = 40;
        let segundoInicioProcessamento: number = 50;
        let tempoSegundosProcessamento: number = 5000;
        let expectedResult: string = 'O processamento demorou um dia ou menos e terminou em: 12:4:10';

        //Act
        let result: string = calcularTempoFinalProcessamento(horaInicioProcessamento, minutoInicioProcessamento, segundoInicioProcessamento, tempoSegundosProcessamento);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Dado que a tarefa demorou 90000 segundos', () => {
        //Arrange
        let horaInicioProcessamento: number = 10;
        let minutoInicioProcessamento: number = 40;
        let segundoInicioProcessamento: number = 50;
        let tempoSegundosProcessamento: number = 90000;
        let expectedResult: string = 'O processamento demorou mais de um dia (compra um novo) e terminou em: 11:40:50';

        //Act
        let result: string = calcularTempoFinalProcessamento(horaInicioProcessamento, minutoInicioProcessamento, segundoInicioProcessamento, tempoSegundosProcessamento);

        //Assert
        expect(result).toBe(expectedResult);
    });
});


//ex.20

import { calcularSalarioSemanal } from "../../lab02/functions";

describe('ex. 20, Calcular custo salarial semanal', () => {
    test('Trabalhou 35 horas', () => {
        //Arrange
        let horasTrabalho: number = 35;
        let expectedResult: number = 262.5;

        //Act
        let result: number = calcularSalarioSemanal(horasTrabalho);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Trabalhou 38 horas', () => {
        //Arrange
        let horasTrabalho: number = 38;
        let expectedResult: number = 290;

        //Act
        let result: number = calcularSalarioSemanal(horasTrabalho);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('Trabalhou 42 horas', () => {
        //Arrange
        let horasTrabalho: number = 42;
        let expectedResult: number = 335;

        //Act
        let result: number = calcularSalarioSemanal(horasTrabalho);

        //Assert
        expect(result).toBe(expectedResult);
    });
    test('expect error more than 168 hours a week or negative hours', () => {
        expect(() => {
            calcularSalarioSemanal(170);
            calcularSalarioSemanal(-1); //isto pode ser assim?!
        }).toThrow('Horas de trabalho não podem exceder 168 semanais, ou ser negativas');
    })
    test('throws error if hours is negative', () => { //criado com ChatGPT
        //Arrange
        const horasTrabalho = -1;
        
        //Act & Assert
        expect(() => calcularSalarioSemanal(horasTrabalho)).toThrow('Horas de trabalho não podem exceder 168 semanais, ou ser negativas')
    })
});