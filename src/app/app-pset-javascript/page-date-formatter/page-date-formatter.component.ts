import { Component, OnInit } from '@angular/core';
import { dateFormatter } from '../02-dateformatter/date-formatter';
import * as moment from "moment";

interface Data {
  date: string;
  country: string;
}

@Component({
  /*selector: 'app-page-date-formatter',*/
  templateUrl: './page-date-formatter.component.html',
  styleUrls: ['./page-date-formatter.component.scss']
})
export class PageDateFormatterComponent implements OnInit {

  constructor() { }

  data: Data = {
    date:" ",
    country: "at"
  };

  result= "";

  ngOnInit() 
  {
    //this.data.date = moment().format('YYYY-MM-DD');
    this.result=dateFormatter(new Date(this.data.date),this.data.country);
    
  }

}
