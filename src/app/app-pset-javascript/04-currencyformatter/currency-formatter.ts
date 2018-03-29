import { error } from "protractor";

export function currencyFormatter(amount, currency = 'EUR', country = 'at'): string {
    //toLocaleString() will format a number using location specific thousands separator.
    //('€ 1.000,00');
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
    //console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
    if (currency == 'EUR' && country == 'at')
    {
        return '€' + ' ' + amount.toLocaleString('de-DE' , {min : 2,max: 2});
    }
  
}
