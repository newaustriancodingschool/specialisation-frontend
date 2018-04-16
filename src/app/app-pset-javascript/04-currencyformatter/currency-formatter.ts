// var currency = require("currency.js");
var currency_value = require("currency-formatter");

// yarn add currency.js

export function currencyFormatter(
  amount: any,
  currency = "EUR",
  country = "at"
): string {
  if (typeof amount == "string") {
    throw "Error, you should enter numeric value for amount ";
  }

  // country  = country.toLowerCase();
  // currency = currency.toUpperCase();

  switch (country) {
    case "at": {
      // € 1.000,00'
      if (currency == "EUR" || currency == "eur")
        return currency_value.format(amount, { code: "EUR" }).toString();

      // $ 0,00
      if (currency == "USD" && amount == 0)
        return currency_value.format(amount, { code: "USD" });

      // $ 5,12
      if (currency == "USD")
        return currency_value.format(amount, { code: "USD" });

      // £ 1,239.00
      if (currency == "GBP")
        return currency_value.format(amount, { code: "GBP" });
    }
    case "AT": {
      // € 1.000,00'
      if (currency == "EUR" || currency == "eur")
        return currency_value.format(amount, { code: "EUR" });
      // if (amount==1)
      // {
      //   var NewAmount = "€ " + 1 + "," + "00";
      //   return NewAmount;
      // }
    }
    case "uk": {
      // € 1,000.00
      // return createMoneyFormUk(amount);
      return currency_value.format(amount, { code: "EURUK" });
    }
    case "us": {
    }
    case "de": {
      throw "Error";
      //return "Error";
    }
    default: {
      var NewAmount = "€ " + amount / 1000 + "." + "00";
      return "Error";
    }
  }
}
