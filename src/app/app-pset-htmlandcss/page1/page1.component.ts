import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  myName: string = '';
  isVisible: boolean = false;
  imgUrl: string = 'https://ak1.picdn.net/shutterstock/videos/1006819771/thumb/6.jpg';

  constructor() { }

  ngOnInit() {
  }

  writeMyName() {
    this.isVisible = true;
    this.imgUrl = 'http://serverpartsonline.com/wp-content/uploads/2017/04/Welcome_Part-Source-Online.jpg';
  }

}
