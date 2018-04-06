import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [Page1Component, Page2Component, Page3Component]
})
export class AppPsetHtmlandcssModule { }
