import { Component, OnInit } from '@angular/core';
import * as moment from "moment"; 
import { datediff } from '../../app-pset-javascript/03-datediff/datediff';


interface Data {
  firstDate: string;
  secondDate: string;
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  imgUrl: string = 'https://trbbbbb.com/wp-content/uploads/data/2018/1/9/laptop-cal-PIC-WSW30685.jpg';

  data : Data =  {
    firstDate :'' , 
    secondDate : '' 
  };
  result = this.calculate();


  ngOnInit() {
    this.data.firstDate = moment().format("YYYY-MM-DD");
    this.data.secondDate = moment().format("YYYY-MM-DD");
    
  }
   calculate() {

  const dat1 = moment(this.data.firstDate).toDate; // moment(this.data.firstDate).startOf('day');
  const dat2 = moment(this.data.secondDate).toDate;//moment(this.data.secondDate).startOf('day');
  
  const duration = moment.duration(dat1.diff(dat2));
  const days = duration.asDays();
  return Math.abs(days);
  }
}
