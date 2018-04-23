import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})

export class Page4Component implements OnInit {
  imgUrl: string = 'https://wallpaperfm.com/img/original/4/1/0/4833.jpg';
  data: any ={
    amount:null,
    currency:null,
    country:null
  };
  result: number;

  ngOnInit() {}

  currencyFormatter(amount: string | number, currency: string = 'EUR', country: string = 'at') {

  let currencySymbol: string = '',
  countryCode: string = '';
  currency = currency.toUpperCase();
  country = country.toLowerCase();

  if (typeof amount === 'string') {
    throw Error;
  }
  if (currency === 'EUR' && country === 'at') {
    return (
      '€' +
      ' ' +
      amount.toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    );
  } else if (currency === 'EUR' && country === 'uk') {
    return (
      '€' +
      ' ' +
      amount.toLocaleString('en-UK', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    );
  } else if (currency === 'USD' && country === 'at') {
    return (
      '$' +
      ' ' +
      amount.toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    );
  } else if (currency === 'GPB' && country === 'at') {
    return (
      '£' +
      ' ' +
      amount.toLocaleString('en-UK', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    );
  }
  }
}


