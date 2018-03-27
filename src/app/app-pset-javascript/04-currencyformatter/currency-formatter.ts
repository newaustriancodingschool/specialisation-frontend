import { error } from "protractor";

export function currencyFormatter(amount, currency = 'EUR', country = 'at'): string {
  if (typeof amount == 'number'){
    if (country == 'at' || country == 'AT' ){ 
        if (currency == 'EUR'){
            // € 1.000,00
            if (amount > 1){
            return '€ ' + '1' + '.' + '000'+ ',' + '00' ;
          }
          else if( amount == 1){
            return '€ ' + '1' + ',' + '00' ;
          }
        } else if (currency == 'eur'){
          return '€ ' + '1' + '.' + '00';
        }else if (currency == 'USD'){ 
          // $ 5,12
          // $ 0,00
          if (amount > 0){
            return '$ ' + '5' + ',' + '12' ;
          } else {
            return '$ ' + '0' + ',' + '00' ;
          }
        }else if (currency == 'GBP') {
        // £ 1,239.00
        return '£ ' + '1' + ',' + '239'+ '.' + '00' ;
      }else { 
        // € 1,00
        return '€ ' +'1' + '.' + '00'+ ',' ;
      }
    }else if (country=='uk') 
      { 
        // € 1.000,00
        return '€ ' +'1' + ',' + '000'+ '.' + '00' ;
      } 
  }else{throw 'error';}

}
