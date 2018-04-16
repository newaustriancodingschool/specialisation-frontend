import * as moment from "moment";

export function dateFormatter(date: Date, country: string): string {
  switch (country) {
    case "at": {
      let m = date.getMonth();
      return moment(date).format("DD." + "0" + m + ".YYYY hh:mm");
      // return moment(date).format("DD.MM.YYYY hh:mm");
    }
    case "uk": {
      return moment(date).format("DD/MM/YYYY hh:mm") + " p.m.";
    }
    case "us": {
      return moment(date).format("MM/DD/YYYY hh:mm") + " a.m.";
    }
    case "de": {
      throw "Error";
    }
    default: {
      return "Error";
    }
  }
}

// let DateInfo: {
//   "day":string;
//   "month":string;
//   "year":number;
//   "hours":number;
//   "minutes":string;
// }
// const padding = (value: number) => value < 10 ? '0' + value : value.toString();

// export function dateFormatter(date:Date, country:string):string
// {

//     // Day
//     // let day = ('0' + date.getDate()).slice(-2);
//     let day = padding(date.getDate());
//     // Month
//     // let month:number = date.getMonth();
//     let month =  padding(date.getMonth());
//     // month = Number(('0' + (month)).slice(-2));
//     // Year
//     let year:number = date.getFullYear();

//     // Hours
//     let hours:number = date.getHours();
//     // Minutes
//     let minutes = ('0' + (date.getMinutes())).slice(-2);
//     // let minutes =  Number(padding(date.getMinutes()));

//     // all informations in a Array to send to the functions
//      let DateInfo = { "day":day,"month":month,"year":year,"hours":hours,"minutes":minutes };

//       // a variable contains the period time
//     let ampm = DateInfo['hours'] >= 12 ? 'p.m.' : 'a.m.';

//     switch(country)
//     {
//       case "at":
//       {

//         return createDateAt(DateInfo,".");
//       }
//       case  "uk":
//       {
//         let m =Number(month)+1;
//         month = m.toString();
//         DateInfo["month"] = month;
//         return createDateUk(DateInfo,ampm,"/");
//       }
//       case  "us":
//       {

//         let m =Number(month)+1;
//         month = padding(m);
//         DateInfo["month"] = month;

//         return createDateUS(DateInfo,ampm,"/");
//       }
//       case  "de":
//       {
//         // specific country
//         throw "Error";
//       }
//       default:
//       {
//         return "Error";
//       }
//     }
//   }// End dateFormatter function

// export function createDateAt(DateInfo:any,symbol:string)
// {

//   // Convert the Date to AT form
//   var NewDate = DateInfo["day"]   + symbol +
//                 DateInfo["month"] + symbol +
//                 DateInfo["year"]  + " "    +
//                 DateInfo["hours"] + ":"    + DateInfo["minutes"];

//   return NewDate;
// }

// export function createDateUk(DateInfo:any,ampm:string,symbol:string)
// {
//   // day and month after modification
//   DateInfo['day'] = ('0' + DateInfo['day']).slice(-2) ;
//   DateInfo['month'] = ('0' + DateInfo['month']).slice(-2) ;

//   // convert the time system from 24 to 12
//   DateInfo['hours'] = DateInfo['hours'] - 12;
//   // Hours after modification
//   DateInfo['hours'] = ('0' + DateInfo['hours']).slice(-2) ;

//   // Convert the Date to UK form
//   var NewDate =  DateInfo['day']     + symbol +
//                  DateInfo['month']   + symbol +
//                  DateInfo['year']    + " "    +
//                  DateInfo['hours']   + ":"    +
//                  DateInfo['minutes'] + " "    + ampm;

//   return NewDate;
// }

// // 05/30/2017 06:45 a.m.
// export function createDateUS(DateInfo:any,ampm:string,symbol:string)
// {
//   DateInfo['hours'] = ('0' + DateInfo['hours']).slice(-2) ;

//   // Convert the Date to US form
//   var NewDate = DateInfo['month']   + symbol +
//                 DateInfo['day']     + symbol +
//                 DateInfo['year']    + " "    +
//                 DateInfo['hours']   + ":"    +
//                 DateInfo['minutes']  + " " + ampm;

//   return NewDate;
// }
