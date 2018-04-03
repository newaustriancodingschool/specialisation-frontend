import {Page3Component} from '../app-pset-htmlandcss/page3/page3.component';
import {Page2Component} from '../app-pset-htmlandcss/page2/page2.component';
import {Page1Component} from '../app-pset-htmlandcss/page1/page1.component';
import { PageDateDiffComponent } from '../app-pset-javascript/page-date-diff/page-date-diff.component';

export const routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: 'date-diff-calculator', component: PageDateDiffComponent}
];
