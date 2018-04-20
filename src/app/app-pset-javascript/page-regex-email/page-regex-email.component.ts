import { Component, OnInit } from '@angular/core';

import { isValidEMail } from '../05-regexemail/regex-email';

interface Data {
  email: string;
}

let result;

@Component({
  /*selector: 'app-page-regex-email',*/
  templateUrl: './page-regex-email.component.html',
  styleUrls: ['./page-regex-email.component.scss']
})
export class PageRegexEmailComponent implements OnInit {
  
  data:Data = {
    email:"" ,
  };

  result:any;

  //result:Boolean;
  constructor() { }

  ngOnInit() {


  }

  makeResult() {
    this.result = isValidEMail( this.data.email );
    }

}
