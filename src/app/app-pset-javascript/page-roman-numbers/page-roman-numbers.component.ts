import { Component, OnInit } from '@angular/core';
import { converter } from '../09-roman-numbers/roman-numbers';

interface Data {
  number: number;
  option:number;
}

let result_Ar:number;
let result_Ro:string;


@Component({
  /*selector: 'app-page-roman-numbers',*/
  templateUrl: './page-roman-numbers.component.html',
  styleUrls: ['./page-roman-numbers.component.scss']
})
export class PageRomanNumbersComponent implements OnInit {

  constructor() { }


  data: Data = {
    number:0,
    option:0
  };

  /*
  result_Ar=0;
  result_Ro="";
  */
 result:any;
  ngOnInit() 
  {
    console.log("Option: " + this.data.option);
    console.log("Number: " + this.data.number);
    if(this.data.option==1)
    {
      this.result=converter.toArabic(this.data.number);
      console.log("Result: " + this.result);
    }else if(this.data.option==2){
      this.result=converter.toRoman(this.data.number);
      console.log("Result: " + this.result);
    }  
  }

}
