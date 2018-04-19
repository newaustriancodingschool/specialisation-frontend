import { Component, OnInit } from '@angular/core';
import * as moment from "moment"; 
import { element } from 'protractor';
//import {dateformatter} from './02-dateformatter/dateformatter';



@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  imgUrl: string = 'http://www.nationsonline.org/gallery/World/World-map-country-codes.jpg';
  data: any = {
    date: null,
    country: null
  };
  result: string = 'The differenc';
  selectedCountry:string='at';

  ngOnInit() {}
  
  dateFormatter(date: Date, country: string):void {
  //'01.02.2017 12:05'
    if (this.selectedCountry === 'at') {
        this.result = moment(date).format('DD.MM.YYYY ')
    }
  //'01/02/2017 03:12 p.m.'
    else if (this.selectedCountry === 'uk'){
        this.result = moment(date).format('DD/MM/YYYY ')  ;     
    }
  //05/30/2017 06:45 a.m.    
    else if (this.selectedCountry === 'us'){
        this.result = moment(date).format('MM/DD/YYYY ')   ;  
    }
    else {
      this.result ="there some error";
      //  throw Error ;
    } 
}

select (element: any ){
this.selectedCountry = element.target.value ;
}
  

}



