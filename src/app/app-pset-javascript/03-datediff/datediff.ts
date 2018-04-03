import * as moment from 'moment';

export function datediff(first: Date, second: Date): number {
  const firstMoment = moment(first).startOf('day');
  const secondMoment = moment(second).startOf('day');
  return Math.abs(firstMoment.diff(secondMoment, 'days', true));
}
