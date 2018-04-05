import * as moment from 'moment';

export function datediff(first: Date, second: Date): number {

  const firstDate = moment(first).startOf('day');
  const secondDate = moment(second).startOf('day');
  return Math.abs(firstDate.diff(secondDate, 'days' , true));
}
