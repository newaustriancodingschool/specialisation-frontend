import { Component, OnInit } from '@angular/core';
import { currencyFormatter } from '../04-currencyformatter/currency-formatter';

interface Data {
  amount: number;
  currency: string;
  country: string;
}

let result;

@Component({
  /*selector: 'app-page-currency-formatter',*/
  templateUrl: './page-currency-formatter.component.html',
  styleUrls: ['./page-currency-formatter.component.scss']
})

export class PageCurrencyFormatterComponent implements OnInit 
{
  
  data:Data = {
    amount: 0,
    currency: 'EUR',
    country:'at'
  };

  result:string = "";

  constructor() { }


  ngOnInit() 
  {
    if (typeof this.data.amount === "string") 
    {
      throw "Error, you should enter numeric value for amount ";
    }

  }

  makeResult() {
    this.result = currencyFormatter( 
      this.data.amount,
      this.data.currency,
      this.data.country
      );
    }
  }
