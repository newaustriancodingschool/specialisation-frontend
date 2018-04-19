import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDateDiffComponent } from './page-date-diff/page-date-diff.component';
import { FormsModule } from '@angular/forms';
import { PageTest } from './page-test/page-test';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [PageDateDiffComponent , PageTest]

})
export class AppPsetJavascriptModule { }
