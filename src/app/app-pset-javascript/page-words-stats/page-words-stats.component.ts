import { Component, OnInit } from '@angular/core';
import { wordStats } from '../06-words-stats/word-stats';

interface Data {
  text : string;
  word: string;
  option:number;
}

let result:any;


@Component({
  //selector: 'app-page-words-stats',
  templateUrl: './page-words-stats.component.html',
  styleUrls: ['./page-words-stats.component.scss']
})
export class PageWordsStatsComponent implements OnInit {

  data:Data = {
    text : "",
    word: "",
    option:0
  };

  result=0;

  constructor() { }

  ngOnInit() {
    if(this.data.option==1){
        this.result = wordStats.countWords(this.data.text);
    } else if(this.data.option==2){
       this.result = wordStats.occurrences(this.data.word,this.data.text);
        //this.result = 2 ;
    } else if(this.data.option==3){
      this.result = wordStats.occurrencesList(this.data.text);
      console.table(this.result);
      
      //this.result = 3 ;
    }else{
      this.result = 0 ;
    }
  }

}
