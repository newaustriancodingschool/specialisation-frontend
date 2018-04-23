import { converter } from './../../app-pset-javascript/09-roman-numbers/roman-numbers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.scss']
})
export class Page6Component implements OnInit {
  valuetext : string = '';
  obj: any = {
    term: String ,
    count: Number
  };
  arrObj :Array<any> = [];
  
  ngOnInit() {}
  
  calc() :void{
    this.arrObj=[];
    let LowerCasetext = this.valuetext.toLowerCase();
    let sentence = [];
    //let obj: Array<any> = [];
    sentence = LowerCasetext.split(" ");
    let sortedArr = [],
    counter = 1;
    // Sort the array
    sortedArr = sentence.sort();
    
    //Two loops for matching and calculate the same word
    
    for (var i = 0; i < sortedArr.length; i = i + counter) {
      counter = 1; //to reset the counter
      for (var j = i + 1; j < sortedArr.length; j++) {
        if (sortedArr[i] === sortedArr[j]) counter++;
      }
      // I got the right result but I couldn't get the right form
      
      //let jj= new this.obj(sortedArr[i],counter);    
      this.arrObj.push(sortedArr[i]+' '+counter);
      console.log(this.arrObj);
    }
    
    //return this.arrObj;
  }
};

