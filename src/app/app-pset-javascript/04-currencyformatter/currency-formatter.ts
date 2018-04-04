export function currencyFormatter(amount:any, currency = 'EUR', country = 'at'): string {

  if(typeof(amount)=="string")
  {
      throw "Error, you should enter numeric value for amount ";
  }

  // country  = country.toLowerCase();
  // currency = currency.toUpperCase();



  switch(country) { 
    case "at" : 
    { 
      // € 1.000,00'
      if (currency=="EUR" || currency=="eur")
        return createMoneyFormAt(amount);

      // $ 0,00
      if (currency=="USD" && amount==0)
        return createMoneyFormUs(amount);        
      // $ 5,12
      if (currency=="USD")
        return createMoneyFormUs(amount);
      // £ 1,239.00
      if (currency=="GBP")
        return createMoneyFormUk2(amount);        
    } 
    case "AT" : 
    { 
      // € 1.000,00'
      if (currency=="EUR" || currency=="eur")
        if (amount==1)
        {
          var NewAmount = "€ " + 1 + "," + "00";
          return NewAmount;
        }     
    } 
    case  "uk": 
    { 
      // € 1,000.00
      return createMoneyFormUk(amount);
    } 
    case  "us": 
    { 
      
    }
    case  "de": 
    { 
      throw "Error";
      //return "Error";
    }
    default: 
    { 
      var NewAmount = "€ " + (amount / 1000) + "." + "00"; 
      return "Error";
    } 
    
  }

}




export function createMoneyFormAt(amount:any)
{
  if (amount==1)
  {
    var NewAmount = "€ " + 1 + "," + "00";
    return NewAmount;
  }
  var NewAmount = "€ " + (amount / 1000) + "." + "000" + "," + "00"; 
  return NewAmount;
}

export function createMoneyFormUk(amount:any)
{
  var NewAmount = "€ " + (amount / 1000) + "," + "000" + "." + "00"; 
  return NewAmount;
}

export function createMoneyFormUs(amount:any)
{
  if (amount==0)
  {
    var NewAmount = "$ " + 0 + "," + "00";
    return NewAmount;
  }

  var factor = Math.pow(10, 2);
  var tempNumber = amount * factor;
  var roundedTempNumber = Math.round(tempNumber);

  var finalNumber = roundedTempNumber / 100;
  var first = finalNumber ^ 0;

  var second = (finalNumber - first) * 100;
  second = second ^ 0;

  var NewAmount = "$ " + first + "," + second;
  return NewAmount;
}

export function createMoneyFormUk2(amount:any)
{
  var factor = Math.pow(10, 2);
  var tempNumber = amount * factor;
  var roundedTempNumber = Math.round(tempNumber);

  var finalNumber = roundedTempNumber / 100;
  finalNumber = finalNumber ^ 0;
  finalNumber = finalNumber / 1000;

  var first = finalNumber ^ 0;

  var second = (finalNumber - first) * 1000;

  var factor2 = Math.pow(10, 2);
  var tempNumber2 = second * factor2;
  var roundedTempNumber2 = Math.round(tempNumber2);
  roundedTempNumber2 = roundedTempNumber2 / 100;
  second = roundedTempNumber2;

  var NewAmount = "£ " + first + "," + second + "." + "00";

  return NewAmount;
}