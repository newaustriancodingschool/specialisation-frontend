import { error } from 'util';

export function currencyFormatter(amount: number, currency = 'EUR', country = 'at'): string {
  const Formatter = require('format-currency');
  const inspector = typeof(amount);
  if (inspector) {
    if (currency === 'EUR' || currency === 'eur') {
      if (country === 'at' || country === 'AT') {
        const options = {format: '%s %v', symbol: '€', locale: 'de-DE'};
        return Formatter(amount, options);
      } else if (country === 'uk' || country === 'UK') {
        const options = { format: '%s %v', symbol: '€', locale: 'en-gb' };
        return Formatter(amount, options);
      }
    } else if (currency === 'USD' || currency === 'usd') {
      if (country === 'at' || country === 'AT') {
        const options = { format: '%s %v', symbol: '$', locale: 'de-DE' };
        return Formatter(amount, options);
      }
    } else if (currency === 'GBP' || currency === 'gbp') {
      if (country === 'at' || country === 'AT') {
        const options = { format: '%s %v', symbol: '£', locale: 'de-DE'};
        return Formatter(amount, options);
      }
    }
  } else {
   return 'undefined';
  }
}
