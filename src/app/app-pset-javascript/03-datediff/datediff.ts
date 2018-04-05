<<<<<<< HEAD
export function datediff(first, second): number {
  // get the UTC format. 
  let milliDiff = first.valueOf() - second.valueOf();
  return Math.ceil(Math.abs(milliDiff / (1000*60*60*24)));
=======
import * as moment from 'moment';

export function datediff(first: Date, second: Date): number {
  const firstMoment = moment(first).startOf('day');
  const secondMoment = moment(second).startOf('day');
  return Math.abs(firstMoment.diff(secondMoment, 'days', true));
>>>>>>> 6ad8d7869cc5422683e966b393962156e4d5b336
}
