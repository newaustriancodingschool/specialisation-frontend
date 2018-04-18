import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDateDiffComponent } from './page-date-diff/page-date-diff.component';
import { FormsModule } from '@angular/forms';
import { PageTestComponent } from './page-test/page-test.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [PageDateDiffComponent, PageTestComponent]
})
export class AppPsetJavascriptModule { }
