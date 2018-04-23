import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {Page4Component} from './page4/page4.component';
import { FormsModule } from '@angular/forms';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [Page1Component, Page2Component, Page3Component, Page4Component, Page5Component, Page6Component]
})
export class AppPsetHtmlandcssModule { }
