/**
 * Desenvolva uma classe Array que encapsule um array de inteiros através dos seguintes métodos:
 * a) Construtor público em que o array encapsulado fica vazio (i.e. sem valores). (*)
 * Classes allow a visibility definition (private / protected / public)
 * • Keep fields private
 * • Keep constructors public (for the time being)
 * • Keep functions private unless you want to expose them
 */

class ArraysMethods {
    /**
     * fields / atributos
     */
    private array: number[];


    /**
     * 
     * @param array given array
     * b) Construtor público que permita inicializar o array encapsulado com alguns valores. (**)
     */
    constructor(array: number[]) {
        this.array = array;
    }

    /**
     * functions
     */
    // c) Adicione um novo elemento (valor) ao array encapsulado. (*)
    public addElement(newValue: number) {
        this.array.push(newValue);
    }
    // d) Retire o primeiro elemento do array encapsulado com um determinado valor. (*)
    public removeFirstElement() {
        this.array.shift();
    }
    // e) Retorne o valor de um determinado elemento indicado pela sua posição. (*)
    public getElementByIndex(index: number): number | undefined {
        return this.array[index];
    }
    // f) Retorne o número de elementos no array. (*)
    public returnNumberOfElements(): number {
        let i: number = 0;
        let count: number = 0;
        while (this.array[i] !== undefined) {
            count++
            i++
        }
        return count;
    }
    // g) Retorne o maior elemento do array. (**)
    public returnHighestElement(): number {
        let highestElement: number = this.array[0];
        let i: number = 0;
        while (this.array[i] !== undefined) {
            i++
            if (highestElement < this.array[i]) {
                highestElement = this.array[i];
            }
        }
        return highestElement;
    }

    // h) Retorne o menor elemento do array. (**)
    public returnLowestElement(): number {
        let lowestElement: number = this.array[0];
        let i: number = 0;
        while (this.array[i] !== undefined) {
            i++
            if (lowestElement > this.array[i]) {
                lowestElement = this.array[i];
            }
        }
        return lowestElement;
    }

    // i) Retorne a média de todos os elementos. (**)
    public returnAverage(): number {
        let sum: number = 0;
        let count: number = 0;
        let i: number = 0;
        while (this.array[i] !== undefined) {
            sum += this.array[i];
            count++
            i++
        }
        return sum / count;
    }

    // j) Retorne a média de todos os números pares. (**)


}

let array1 = new ArraysMethods([]);
array1.addElement(1);
console.log(array1);
let temp = array1.getElementByIndex(0);
array1.addElement(2);
array1.addElement(3);
array1.addElement(4);
array1.addElement(5);
array1.addElement(8);
let temp2 = array1.returnNumberOfElements();
console.log(temp2);
let temp3 = array1.returnHighestElement();
console.log(temp3);
let temp4 = array1.returnLowestElement();
console.log(temp4);
let temp5 = array1.returnAverage();
console.log(temp5);