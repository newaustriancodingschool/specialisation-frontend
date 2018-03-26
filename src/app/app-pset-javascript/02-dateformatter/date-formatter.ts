export function dateFormatter(date, country) {

    switch(country) { 
      case "at": 
      { 
        // 01.02.2017 12:05 
        return createDateAt(date,".");
      } 
      case  "uk": 
      { 
        // 01/02/2017 03:12 p.m.
        return createDateUk(date,"/");
      } 
      case  "us": 
      { 
        // 05/30/2017 06:45 a.m.
        return createDateUS(date,"/"); 
      }
      case  "de": 
      { 
        // specific country
        throw "Error";
        //return "Error";
      }
      default: 
      { 
        return "Error";
      } 
  } 

}

export function createDateAt(date,symbol)
{
  // Day
  var day = ('0' + date.getDate()).slice(-2);
  // Month
  var month = date.getMonth();
  month = ('0' + (month)).slice(-2);
  // Year
  var year = date.getFullYear();
  // Hours
  var hours = date.getHours();
  // Minutes
  var minutes = ('0' + (date.getMinutes())).slice(-2);

  // Convert the Date to AT form 
  var NewDate = day   + symbol +
                month + symbol +
                year  + " "    + 
                hours + ":"    + minutes;

  return NewDate;
}


export function createDateUk(date,symbol)
{
  // Day
  var day = ('0' + date.getDate()).slice(-2);
  // Month (We should to add 1 month )
  var month = date.getMonth() + 1;
  month = ('0' + (month)).slice(-2);
  // Year
  var year = date.getFullYear() ;
  // Minutes
  var minutes = ('0' + (date.getMinutes())).slice(-2);
  // Hours
  var hours = date.getHours() ;
  // a variable contains the period time
  var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
  // convert the time system from 24 to 12 
  hours = hours - 12;
  // Hours after modification
  hours = ('0' + hours).slice(-2) ;

  // Convert the Date to UK form 
  var NewDate =  day     + symbol +
                 month   + symbol + 
                 year    + " "    + 
                 hours   + ":"    + 
                 minutes + " "    + ampm;

  return NewDate;
}

// 05/30/2017 06:45 a.m.
export function createDateUS(date,symbol)
{
  // Day
  var day = ('0' + date.getDate()).slice(-2);
  // Month (We should to add 1 month )
  var month = date.getMonth() + 1;
  month = ('0' + (month)).slice(-2);
  // Year
  var year = date.getFullYear() ;
  // Minutes
  var minutes = ('0' + (date.getMinutes())).slice(-2);
  // Hours
  var hours = date.getHours() ;
  // a variable contains the period time
  var ampm = hours >= 12 ? 'p.m.' : 'a.m.';

  // Hours after modification
  hours = ('0' + hours).slice(-2) ;

  // Convert the Date to UK form 
  var NewDate =  month   + symbol + 
                 day     + symbol + 
                 year    + " "    + 
                 hours   + ":"    + 
                minutes  + " " + ampm;

  return NewDate;
}