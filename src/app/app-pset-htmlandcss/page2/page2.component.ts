import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

// Service
//import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  imgUrl: string = 'http://www.bhmpics.com/wallpapers/time_to_be_creative-1440x900.jpg';
  data: any = {
    firstDate: null,
    secondDate: null
  };
  result: number;

  ngOnInit() {}

  datediff(firstDate: Date, secondDate: Date): void {
    
    // Define the first and second day 
    const Date1 = moment(firstDate, 'YYYY-MM-DD').startOf('day');
    const Date2 = moment(secondDate, 'YYYY-MM-DD').startOf('day');
    // Calculate the difference using moment library
    const duration = moment.duration(Date1.diff(Date2));
    const days = duration.asDays();
    this.result =  Math.floor(Math.abs(days));

}

}