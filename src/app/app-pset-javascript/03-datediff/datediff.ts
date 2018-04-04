<<<<<<< HEAD
export function datediff( first , second ) {

  //Get 1 day in milliseconds

  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds

  var first_ms = first.getTime();

  var second_ms = second.getTime();

  // Calculate the difference in milliseconds

  var difference_ms = second_ms - first_ms;

  //take out milliseconds

  difference_ms = difference_ms/1000;

  var seconds = Math.floor(difference_ms % 60);

  difference_ms = difference_ms/60; 

  var minutes = Math.floor(difference_ms % 60);

  difference_ms = difference_ms/60; 

  var hours = Math.floor(difference_ms % 24);  

  var days = Math.floor(difference_ms/24);

  if (days == 0){ 

  	if (first.getDay() != second.getDay() ) days++;

  }  
  return Math.abs(days);
=======
import * as moment from 'moment';

export function datediff(first: Date, second: Date): number {
  const firstMoment = moment(first).startOf('day');
  const secondMoment = moment(second).startOf('day');
  return Math.abs(firstMoment.diff(secondMoment, 'days', true));
>>>>>>> eb9e0dba3bb8d8a5557d0871598b009c60e2ef1d
}
