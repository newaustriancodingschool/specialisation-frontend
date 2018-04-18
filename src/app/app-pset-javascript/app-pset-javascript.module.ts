import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDateDiffComponent } from './page-date-diff/page-date-diff.component';
import { FormsModule } from '@angular/forms';
import { PageTestComponent } from './page-test/page-test.component';
import { PageDateFormatterComponent } from './page-date-formatter/page-date-formatter.component';
import { PageCurrencyFormatterComponent } from './page-currency-formatter/page-currency-formatter.component';
import { PageRegexEmailComponent } from './page-regex-email/page-regex-email.component';
import { PageWordsStatsComponent } from './page-words-stats/page-words-stats.component';
import { PageDateSerialiserComponent } from './page-date-serialiser/page-date-serialiser.component';
import { TicTacToeComponent } from './page-tic-tac-toe/tic-tac-toe.component';
import { PageRomanNumbersComponent } from './page-roman-numbers/page-roman-numbers.component';
import { ServiceDiffDateService } from './services/service-diff-date.service';
import { PageSportsStatsComponent } from './page-sports-stats/page-sports-stats.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  providers:[ServiceDiffDateService],
  declarations: [PageDateDiffComponent, PageTestComponent, PageDateFormatterComponent, PageCurrencyFormatterComponent, PageRegexEmailComponent, PageWordsStatsComponent, PageDateSerialiserComponent, TicTacToeComponent, PageRomanNumbersComponent, PageSportsStatsComponent]
})
export class AppPsetJavascriptModule { }
