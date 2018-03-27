export function dateFormatter(date, country) {
<<<<<<< HEAD
  var day = date.getDate(),
      month = date.getMonth() + 1,
      year = date.getFullYear(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      ampm;

  day < 10 ? day = '0' + day : null;
  month < 10 ? month = '0' + month : null;
  hour < 10 ? hour = '0' + hour : null;
  minute < 10 ? minute = '0' + minute : null;

  if (country == 'at') {
    return day + "." + month + "." + year + " " + hour + ":" + minute;
    // '01.02.2017 12:05'
  }
  else if (country == 'uk') {
    if (hour >= 12) {
      ampm = 'p.m.';
      hour = ('0' + (hour - 12)).slice(-2);
    }
    else {
      ampm = 'a.m.';
    }
    return day + "/" + month + "/" + year + " " + hour + ":" + minute + " " + ampm; 
    // '01/02/2017 03:12 p.m.'
  }
  else if (country == 'us') {
    if (hour >= 12) {
      ampm = 'p.m.';
      hour = ('0' + (hour - 12)).slice(-2);
    }
    else {
      ampm = 'a.m.';
    }
    return month + "/" + day + "/" + year + " " + hour + ":" + minute + " " + ampm; 
    // '05/30/2017 06:45 a.m.'
  }
  else {
    return date.toThrow();
  }
=======
    var year = date.getFullYear();
    var month = date.getMonth() +1;
    if (month < 10) {
        month = '0' + month;
    }
    var day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (country == "at") {
        if (hours < 10) {
            hours = "0" + hours;
        }
        var new_date = day + "." + month + "." + year + " " + hours + ":" + minutes ;
    }
    else if (country == "uk") {
        var am_pm = "";
        if (hours < 12) {
            am_pm = "a.m.";
        }
        else if (hours > 12) {
            hours = hours - 12;
            am_pm = "p.m.";
            if (hours < 10) {
                hours = "0" + hours;
            }
        }
        new_date = day + "/" + month + "/" + year + " " + hours + ":" + minutes + " " + am_pm;
    }
    else if (country == "us") {
        var am_pm = "";
        if (hours < 12) {
            am_pm = "a.m.";
        }
        else if (hours > 12) {
            hours = hours - 12;
            am_pm = "p.m.";
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
         new_date = month + "/" + day + "/" + year + " " + hours + ":" + minutes + " " + am_pm;
    }
    else{throw"Error"}
return new_date;
>>>>>>> c228fe51defbe115c899deb96947c312612e6af6
}
