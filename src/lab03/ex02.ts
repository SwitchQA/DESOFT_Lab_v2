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
export function cambioCalculator(value: number, valueCurrency: string): number {
    let euro: number = 0;
    if (value < 0) {
        throw new Error('Invalid input');
    }
    const validCurrencies = ['D', 'L', 'I', 'C', 'F'];
    if (!validCurrencies.includes(valueCurrency)) {
        throw new RangeError('Not a valid currency');
    }
    if (valueCurrency == 'D') {
        euro = value / 1.534;
    } else if (valueCurrency == 'L') {
        euro = value / 0.774;
    } else if (valueCurrency == 'I') {
        euro = value / 161.480;
    } else if (valueCurrency == 'C') {
        euro = value / 9.593;
    } else if (valueCurrency == 'F') { //deleting this if statement will cause get mutation score of 100%
        euro = value / 1.601;
    }
    return Math.round(euro*100)/100;
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
