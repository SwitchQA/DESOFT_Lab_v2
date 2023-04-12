/**
 * function will receive a number(:string), and will re-arrange the digits with odd numbers first, and even numbers last.
 * @param number
 * @returns string
 * @throws Error if number is negative
 */
import { isEven, ensurePositive} from "./functions";

export function reArrangeDigits(number: string): string {

    ensurePositive(parseInt(number));
    let oddDigits = ""; //these 2 will cause a mutation, how to fix?
    let evenDigits = "";

    for (let i = 0; i < number.length; i++) {
        if (isEven(parseInt(number[i]))) {
            evenDigits += number[i];
        }
        else {
            oddDigits += number[i];
        }
    }
    return oddDigits + evenDigits;
}

