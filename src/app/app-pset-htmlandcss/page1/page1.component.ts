import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  myName: string = '';
  isVisible: boolean = false;
  imgUrl: string = 'http://img.sytyson.com/thumb/800x600/2/84/284fe3993173adeefa00774d8ae56c42.jpg';

  constructor() { }

  ngOnInit() {
  }

  writeMyName() {
    this.isVisible = true;
    this.imgUrl = 'https://d26s1dosjyldof.cloudfront.net/experience/wp-content/uploads/2016/09/angularjs-features-1.png';
  }

}
