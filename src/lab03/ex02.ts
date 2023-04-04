//question
// 1. is the 100% mutation score for ex02.ts correct? or should I keep line 19?

/**
 * This function converts a given amount of euros to a given currency
 * @param euro the amount of euros to be converted
 * @param convertCurrency the currency to which the euros will be converted
 * @returns the amount of euros converted to the given currency
 * @throws RangeError if the given currency is not valid
 * @throws Error if the given amount of euros is negative
 * 
 */
export function cambioCalculator(euro: number, convertCurrency: string): number {
    let newValue: number = 0;
    if (euro < 0) {
        throw new Error('Invalid input');
    }
    const validCurrencies = ['D', 'L', 'I', 'C', 'F'];
    if (!validCurrencies.includes(convertCurrency)) {
        throw new RangeError('Not a valid currency');
    }
    if (convertCurrency == 'D') {
        newValue = euro * 1.534;
    } else if (convertCurrency == 'L') {
        newValue = euro * 0.774;
    } else if (convertCurrency == 'I') {
        newValue = euro * 161.480;
    } else if (convertCurrency == 'C') {
        newValue = euro * 9.593;
    } else if (convertCurrency == 'F') { //deleting this if statement will cause get mutation score of 100%
        newValue = euro * 1.601;
    }
    return newValue;
}

// this could be bettered with a two dimensional array

/*
export function cambioCalculator(euro: number, convertCurrency: string): number {
  const conversionRates: { [currency: string]: number } = {
    D: 1.534,
    L: 0.774,
    I: 161.480,
    C: 9.593,
    F: 1.601,
  };

  if (!(convertCurrency in conversionRates)) {
    throw new RangeError('Not a valid currency');
  }

  return euro * conversionRates[convertCurrency];
}
*/
