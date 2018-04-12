import * as moment from "moment"; 

export function datediff(firstDate :Date , secondDate : Date ) {
// Define the first and second day 
const Date1 = moment(firstDate).startOf('day');
const Date2 = moment(secondDate).startOf('day');
// Calculate the difference using moment library
const duration = moment.duration(Date1.diff(Date2));
const days = duration.asDays();
return Math.abs(days);

}