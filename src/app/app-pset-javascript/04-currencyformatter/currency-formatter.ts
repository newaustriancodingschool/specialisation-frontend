export function currencyFormatter(amount, currency = 'EUR', country = 'at'): string {
  if (currency == 'EUR' && country == 'at') {
    return '€' + ' ' + amount.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }
  if (currency == 'EUR' && country == 'uk') {
    return '€' + ' ' + amount.toLocaleString('en-UK', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }
  if (currency == 'USD' && country == 'at') {
    return '$' + ' ' + amount.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }
  if (currency == 'GBP' && country == 'at') {
    return '£' + ' ' + amount.toLocaleString('en-UK', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }
  return '€ 1.00';
}
