import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { datediff } from '../03-datediff/datediff';

@Injectable()
export class ServiceDiffDateService {

  constructor() { }

  calculate(firstDate:string,secondDate:string) {
    return datediff(
        moment(firstDate).toDate(),
        moment(secondDate).toDate()
    );
     
  }

}
