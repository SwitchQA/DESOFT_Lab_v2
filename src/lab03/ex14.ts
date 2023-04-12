/**
 * function will receive the weight of the dog and the amount of food
 * small breed < 10 kg
 * medium breed 10-25 kg
 * large breed > 25-45kg
 * giant breed > 45kg
 * small breed consumes 100g of food per day
 * medium breed consumes 250g of food per day
 * large breed consumes 300g of food per day
 * giant breed consumes 500g of food per day
 * function will return:
 * 0 if the amount of food is correct
 * 1 if the amount of food is too high
 * -1 if the amount of food is too low
 */

//in this function i switched line 36 with line 38 to satisfy the test cases. is that correct?

import { ensurePositive } from "./functions";

export function dogFood(weight: number, food: number): number {

    ensurePositive(weight);
    ensurePositive(food);

    let foodPerDay: number;
    if (weight < 10) {
        foodPerDay = 100;
    } else if (weight < 25) {
        foodPerDay = 250;
    } else if (weight < 45) {
        foodPerDay = 300;
    } else {
        foodPerDay = 500;
    }
    if (food > foodPerDay) {
        return 1;
    } else if (food === foodPerDay) {
        return 0;
    } else {
        return -1;
    }
}