import { OnInit, Component } from '@angular/core';
import * as moment from 'moment';
import { datediff } from '../03-datediff/datediff';
import { ServiceDiffDateService } from '../services/service-diff-date.service';


interface Data {
    firstDate: string;
    secondDate: string;
}

@Component({
    templateUrl: 'page-date-diff.html',
    styleUrls: ['./page-date-diff.scss']
})
export class PageDateDiffComponent implements OnInit {

  calculate(){
    this.serviceDiffDateService.calculate(this.data.firstDate,this.data.secondDate);
    this.result =  this.serviceDiffDateService.calculate(this.data.firstDate,this.data.secondDate);
  }

  constructor(private serviceDiffDateService : ServiceDiffDateService){  }

  data: Data = {
    firstDate: '',
    secondDate: ''
  };
  result = 0;

  ngOnInit() {
    this.data.firstDate = moment().format('YYYY-MM-DD');
    this.data.secondDate = moment()
      .subtract(10, 'days')
      .format('YYYY-MM-DD');
  }


}
