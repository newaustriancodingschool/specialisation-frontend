const padding = (value: number) => value < 10 ? ('0' + value).slice(-2) : value.toString()

export function dateFormatter(date: Date, country: string) {
  let day: string = padding(date.getDate()),
      month: string = padding(date.getMonth() + 1),
      year: string = padding(date.getFullYear()),
      hour: string = padding(date.getHours()),
      minute: string = padding(date.getMinutes()),
      hour12: string = '',
      ampm: string;

  switch (true) {
    case Number(hour) >= 12:
      ampm = 'p.m.';
      hour12 = ('0' + (Number(hour) - 12)).slice(-2);
      break;
    default:
      ampm = 'a.m.';
      hour12 = hour;
  }

  switch (country) {
    case 'at':
      return day + '.' + month + '.' + year + ' ' + hour + ':' + minute;
      // '01.02.2017 12:05'
    case 'uk':
      return day + '/' + month + '/' + year + ' ' + hour12 + ':' + minute + ' ' + ampm; 
      // '01/02/2017 03:12 p.m.'
    case 'us':
      return month + '/' + day + '/' + year + ' ' + hour12 + ':' + minute + ' ' + ampm; 
      // '05/30/2017 06:45 a.m.'
    default:
      throw 'error';
  }
}
