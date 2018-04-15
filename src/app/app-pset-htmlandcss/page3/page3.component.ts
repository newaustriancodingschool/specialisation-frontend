import { Component, OnInit } from '@angular/core';
import * as moment from "moment"; 
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

  ngOnInit() {
  }
  dateFormatter(date: Date, country: string):string {
  //'01.02.2017 12:05'
    if (country === 'at') {
        return moment(date).format('DD.MM.YYYY hh:mm')
    }
  //'01/02/2017 03:12 p.m.'
    else if (country === 'uk'){
        return moment(date).format('DD/MM/YYYY hh:mm ') + 'p.m.' ;     
    }
  //05/30/2017 06:45 a.m.    
    else if (country === 'us'){
        return moment(date).format('MM/DD/YYYY hh:mm ')  + 'a.m.' ;  
    }
    else {
        throw Error ;
    } 
}
  

}



