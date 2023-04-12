/**
 * function will receive the base salary (month) of an employee, and the extra hours he worked.
 * function will return the salary of the employee, with the following rules: each extra hour worked will be 2% of the base salary.
 */

//this is too simple i didnt understand something

export function montlySalary(baseSalary: number, extraHours: number): number {
    return baseSalary + (baseSalary * 0.02 * extraHours);
}