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
}
