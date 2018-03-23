export function dateFormatter(date, country) {
    let day = date.getDate(1);
    let month = date.getMonth(2);
    let year = date.getFullYear(1999);
    return day + " " + month + " " + year ;
}


function dateFormatter(date, country) {
  const date = new Date(1, 1,2017);
  date.setHours(12, 5);
  
      let day = date.getDate(1);
      let month = date.getMonth(2);
      let year = date.getFullYear(1999);
      return day + " " + month + " " + year ;
  
  
  
  }
  
  
       // now() -> 2015-03-24 14:32:20
  
  //console.log(date);
  
  
  //1906-08-10T10:05:00.000Z
  //2017-02-01            T11:05:00.000Z
  //01.02.2017 12:05
  //22 2 2018