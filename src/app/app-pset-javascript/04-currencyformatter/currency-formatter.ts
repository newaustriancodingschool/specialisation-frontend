import { error } from 'util';

export function currencyFormatter(amount: number, currency = 'EUR', country = 'at'): string {
  const formatCurrency = require('format-currency');

  if (currency === 'EUR' || currency === 'eur') {
    if (country === 'at') {
      const parameters = {
          currency: 'EUR', 			// If currency is not supplied, defaults to USD
          symbol: '€',			// Overrides the currency's default symbol
          decimal: ',',			// Overrides the locale's decimal character
          group: '.',			// Overrides the locale's group character (thousand separator)
          pattern: '#,##0.00 !'		// Overrides the locale's default display pattern
        };
      return OSREC.CurrencyFormatter.format(amount, parameters);
    }
  }
  return ' ';
}
  //     return string;
  //   } else if (country === 'uk') {
  //     return Formatter.format(amount, { locale: 'en-US' });
  //   } else {
  //     throw undefined;
  //   }
  // } else if (currency === 'USD' || currency === 'usd') {
  //   if (country === 'at') {
  //     return Formatter(amount).format('$ 0,0');
  //   }
  // } else {
  //   throw undefined;
  // }

