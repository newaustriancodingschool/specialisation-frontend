var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2017, 0, 6);
var secondDate = new Date(2017, 0, 5, 23, 59);
var diffDays;

/* if (firstDate.getHours() == 0 && secondDate.getHours() == 0) { 
    //Date does not have any hours, but only day, month, year
    console.log("there are no hours provided for this date")

    diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

} else if (firstDate.getHours() != 0 || secondDate.getHours() != 0 ){
    console.log("There are hours provided for at least one of the days")
    diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
} else {

} */

if (firstDate < secondDate){
    var tmpDate = firstDate;
    firstDate = secondDate ;
    secondDate = tmpDate;
 
}
diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

console.log(diffDays);
