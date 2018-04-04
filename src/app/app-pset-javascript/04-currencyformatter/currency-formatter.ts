export function currencyFormatter(amount, currency = 'EUR', country = 'at'): string {
<<<<<<< HEAD
    
    currency = currency.toUpperCase();
    country = country.toLowerCase(); 

    if (typeof amount=== 'string' || amount instanceof String) {
       throw "error";
    }
    if (currency == 'EUR' && country == 'at')
    {
        return '€' + ' ' + amount.toLocaleString('de-DE' , {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
    else if (currency == 'EUR' && country == 'uk' )
    {
        return '€' + ' ' + amount.toLocaleString('en-UK' , {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
    else if ( currency == 'USD' && country == 'at')
    {
        return '$' + ' ' + amount.toLocaleString('de-DE' , {minimumFractionDigits: 2, maximumFractionDigits: 2});  
    }
    else if (currency == 'GPB' && country == 'at')
    {
        return '£' + ' ' + amount.toLocaleString('en-UK' , {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
  }


=======
  return '';
}
>>>>>>> eb9e0dba3bb8d8a5557d0871598b009c60e2ef1d
