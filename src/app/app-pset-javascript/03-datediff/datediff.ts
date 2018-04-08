import { DYNAMIC_TYPE } from "@angular/compiler/src/output/output_ast";
import * as moment from 'moment';

export function datediff(first: Date, second: Date): number {
  var firstDate = moment(first).startOf('day'),
      secondDate = moment(second).startOf('day');
  return Math.abs(firstDate.diff(secondDate, 'days'));
}
