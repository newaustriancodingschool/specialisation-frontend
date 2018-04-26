import { debugOutputAstAsTypeScript } from "@angular/compiler";

export function currencyFormatter(amount: string | number, currency: string = 'EUR', country: string = 'at'): string {
  let currencySymbol: string = '',
      countryCode: string = '';
  currency = currency.toUpperCase();
  country = country.toLowerCase();

  switch (country) {
    case 'at':
      countryCode = 'de-DE';
      break;
    case 'uk':
      countryCode = 'en-UK';
  }

  switch (currency) {
    case 'EUR':
      currencySymbol = '€';
      break;
    case 'USD':
      currencySymbol = '$';
      break;
    case 'GBP':
      currencySymbol = '£';
  }

  if (typeof(amount) === 'string') {
    throw null;
  }
  return currencySymbol + ' ' + amount.toLocaleString(countryCode, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
