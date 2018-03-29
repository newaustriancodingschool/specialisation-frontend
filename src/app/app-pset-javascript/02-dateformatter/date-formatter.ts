export function dateFormatter(date, country) {
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
}
