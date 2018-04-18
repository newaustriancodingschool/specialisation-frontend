import {Page3Component} from '../app-pset-htmlandcss/page3/page3.component';
import {Page2Component} from '../app-pset-htmlandcss/page2/page2.component';
import {Page1Component} from '../app-pset-htmlandcss/page1/page1.component';
import { PageDateDiffComponent } from '../app-pset-javascript/page-date-diff/page-date-diff.component';
import { PageTestComponent } from '../app-pset-javascript/page-test/page-test.component';
import { PageDateFormatterComponent } from '../app-pset-javascript/page-date-formatter/page-date-formatter.component';
import { PageCurrencyFormatterComponent } from '../app-pset-javascript/page-currency-formatter/page-currency-formatter.component';
import { PageRegexEmailComponent } from '../app-pset-javascript/page-regex-email/page-regex-email.component';
import { PageWordsStatsComponent } from '../app-pset-javascript/page-words-stats/page-words-stats.component';
import { PageDateSerialiserComponent } from '../app-pset-javascript/page-date-serialiser/page-date-serialiser.component';
import { TicTacToeComponent } from '../app-pset-javascript/page-tic-tac-toe/tic-tac-toe.component';
import { PageRomanNumbersComponent } from '../app-pset-javascript/page-roman-numbers/page-roman-numbers.component';
import { PageSportsStatsComponent } from '../app-pset-javascript/page-sports-stats/page-sports-stats.component';


export const routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: 'date-diff-calculator', component: PageDateDiffComponent},
  {path: 'date-formatter', component: PageDateFormatterComponent},
  {path: 'currency-formatter', component: PageCurrencyFormatterComponent},
  {path: 'regex-email', component: PageRegexEmailComponent},
  {path: 'regex-email', component: PageRegexEmailComponent},
  {path: 'date-serialiser', component: PageDateSerialiserComponent},
  {path: 'tic-tac-toe', component: TicTacToeComponent}, 
  {path: 'roman-numbers', component: PageRomanNumbersComponent}, 
  {path: 'roman-numbers', component: PageRomanNumbersComponent},     
  {path: 'sports-stats', component: PageSportsStatsComponent}

  

  
];
