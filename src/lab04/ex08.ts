/**!SECTION
 * function will take as input an array of numbers, and a nValue, and return an array with only the nValue elements
 * example [1,2,3] nValue = 2 should return [1,2]
 * the return array can have a maximum of 10 values
 */

export function getNFirstElements(numArr: number[], nValue: number): number[] {
    let nArr: number[] = [];
    for (let i = 0; i < nValue || i < 11; i++) {
        nArr.push(numArr[i]);
    }
    return nArr;
}
