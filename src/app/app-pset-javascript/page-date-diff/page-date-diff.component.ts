import { OnInit, Component } from '@angular/core';
import * as moment from 'moment';
import { datediff } from '../03-datediff/datediff';

interface Data {
    firstDate: string;
    secondDate: string;
}

@Component({
    templateUrl: 'page-date-diff.html',
    styleUrls: ['./page-date-diff.scss']
})
export class PageDateDiffComponent implements OnInit {
  data: Data = {
    firstDate: '',
    secondDate: ''
  };
  result: number;

  ngOnInit() {
    this.data.firstDate = moment().format('YYYY-MM-DD');
    this.data.secondDate = moment()
      .subtract(10, 'days')
      .format('YYYY-MM-DD');
  }

  calculate() {
    this.result = datediff(
        moment(this.data.firstDate).toDate(),
        moment(this.data.secondDate).toDate()
    );
  }
}
