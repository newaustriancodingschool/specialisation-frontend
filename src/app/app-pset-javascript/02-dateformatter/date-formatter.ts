export function dateFormatter(date, country) {

    // Day
    let day = ('0' + date.getDate()).slice(-2);
    // Month
    let month = date.getMonth();
    month = ('0' + (month)).slice(-2);
    // Year
    let year = date.getFullYear();
    // Hours
    let hours = date.getHours();
    // Minutes
    let minutes = ('0' + (date.getMinutes())).slice(-2);

    // all informations in a Array to send to the functions
    let DateInfo = { "day":day,"month":month,"year":year,"hours":hours,"minutes":minutes };

      // a variable contains the period time
    let ampm = DateInfo['hours'] >= 12 ? 'p.m.' : 'a.m.';

    switch(country) { 
      case "at": 
      { 
        // 01.02.2017 12:05 
        return createDateAt(DateInfo,".");
      } 
      case  "uk": 
      { 
        // 01/02/2017 03:12 p.m.
        // Month (We should to add 1 month )
        month = date.getMonth()+1;
        month = ('0' + (month)).slice(-2)

        DateInfo["month"] = month;

        return createDateUk(DateInfo,ampm,"/");
      } 
      case  "us": 
      { 
        // 05/30/2017 06:45 a.m.
        // Month (We should to add 1 month )
        month = date.getMonth() + 1;
        month = ('0' + (month)).slice(-2);

        DateInfo["month"] = month;

        return createDateUS(DateInfo,ampm,"/"); 
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

export function createDateAt(DateInfo,symbol)
{ 

  // Convert the Date to AT form 
  var NewDate = DateInfo["day"]   + symbol +
                DateInfo["month"] + symbol +
                DateInfo["year"]  + " "    + 
                DateInfo["hours"] + ":"    + DateInfo["minutes"];

  return NewDate;
}


export function createDateUk(DateInfo,ampm,symbol)
{
  
  // convert the time system from 24 to 12 
  DateInfo['hours'] = DateInfo['hours'] - 12;
  // Hours after modification
  DateInfo['hours'] = ('0' + DateInfo['hours']).slice(-2) ;

  // Convert the Date to UK form 
  var NewDate =  DateInfo['day']     + symbol +
                 DateInfo['month']   + symbol + 
                 DateInfo['year']    + " "    + 
                 DateInfo['hours']   + ":"    + 
                 DateInfo['minutes'] + " "    + ampm;

  return NewDate;
}

// 05/30/2017 06:45 a.m.
export function createDateUS(DateInfo,ampm,symbol)
{
  
  // Hours after modification
  DateInfo['hours'] = ('0' + DateInfo['hours']).slice(-2) ;

  // Convert the Date to UK form 
  var NewDate = DateInfo['month']   + symbol + 
                DateInfo['day']     + symbol + 
                DateInfo['year']    + " "    + 
                DateInfo['hours']   + ":"    + 
                DateInfo['minutes']  + " " + ampm;

  return NewDate;
}