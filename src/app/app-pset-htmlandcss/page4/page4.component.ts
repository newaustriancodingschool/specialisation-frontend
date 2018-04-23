import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})

export class Page4Component implements OnInit {
  // imgUrl: string = 'https://wallpaperfm.com/img/original/4/1/0/4833.jpg';
  data: any ={
    amount:null,
    currency:null,
    country:null
  };
  result: string='0';
  eurSymbole = '€';
  gpbSymbole = '£';
  usaSymbole = '$';
  currSymbole = '';
  co ='';
  cu='';
  ngOnInit() {}

  currencyFormatter(amount: string | number) :void{


  if (typeof amount === 'string') {
    throw Error;
  }
  if (this.cu == 'EUR'){
     this.currSymbole = this.eurSymbole; 
  }else if (this.cu=='USD'){
    this.currSymbole = this.usaSymbole;
  } else if (this.cu=='GPB'){
    this.currSymbole = this.gpbSymbole;
  }
  

  if (this.co == 'at'){
    this.result = 
    this.currSymbole +
    ' ' +
        amount.toLocaleString('de-DE', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2});
  }
  else if (this.co == 'uk'){
    this.result = 
    this.currSymbole +
    ' ' +
        amount.toLocaleString('en-UK', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2});

  }
  else if (this.co == 'us'){
    this.result = 
    this.currSymbole +
    ' ' +
        amount.toLocaleString('de-DE', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2});

  }
}


selectCountry (element: any ){
  this.co = element.target.value ;
  }
 
  
  selectCurrency (element: any ){
  this.cu = element.target.value ;
  }

}
