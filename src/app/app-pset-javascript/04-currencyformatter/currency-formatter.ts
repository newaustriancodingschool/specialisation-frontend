export function currencyFormatter(amount, currency = 'EUR', country = 'at'): string {
  country = country.toLowerCase();
  currency = currency.toUpperCase();
  
  // get the currency char
  let currencyChar = '';
  switch (currency) {
    case 'EUR':
      currencyChar = '€ ';
      break;
    case 'USD':
      currencyChar = '$ ';
      break;
    case 'GBP':
      currencyChar = '£ ';
      break;
    default: 
      throw('not a valid currency');
  }

  // check country
  switch (country) {
    case 'at':
      return currencyChar + formatCurrency(amount, '.', ',')
    case 'uk':
      return currencyChar + formatCurrency(amount, ',', '.') 
    default:
      throw('not a valid country');
  }
}

function formatCurrency(amount, delimiter, comma) {
  // formats as a currency with specified delimiter and comma
  let amountString = amount.toFixed(2);
  let formattedAmount = '';

  let digits = amountString.length;
  let leftOfDelimiter = digits % 3;
  for (let i = 0; i < digits; i++) {
      if (i == digits - 3)
        formattedAmount += comma;
      else {
        if ((digits - i) % 3 == 0)
          formattedAmount += delimiter;
        formattedAmount += amountString[i];
      }
  }
  return formattedAmount;
}
