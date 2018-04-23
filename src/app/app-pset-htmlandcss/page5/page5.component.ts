import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {
  email : string = '';
  result : boolean = false;

  ngOnInit() {
  }

   isValidEMail(): void {
    // email.replace(/\\\s/g, '');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.result= regex.test(String(this.email).toLowerCase());
    window.alert(this.result);
  }
  






}
