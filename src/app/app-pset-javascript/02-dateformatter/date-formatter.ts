<<<<<<< HEAD
export function dateFormatter(date, country) {
  var datestring = '';
  
  if (country == 'at') {
      datestring += twoDigit(date.getDate()) + '.' + twoDigit(date.getUTCMonth()+1) + '.' + date.getFullYear();
      datestring += ' ' + twoDigit(date.getHours()) + ':' + twoDigit(date.getMinutes());
  }

  else if (country == 'uk') {
      datestring += twoDigit(date.getDate()) + '/' + twoDigit(date.getUTCMonth()+1) + '/' + date.getFullYear();
      var pm = (date.getHours() > 11) ? " p.m." : " a.m.";
      datestring += ' ' + twoDigit(date.getHours() % 12) + ':' + twoDigit(date.getMinutes()) + pm;
  }

  else if (country == 'us') {
      datestring += twoDigit(date.getUTCMonth()+1) + '/' + twoDigit(date.getDate()) + '/' + date.getFullYear();
      var pm = (date.getHours() > 11) ? " p.m." : " a.m.";
      datestring += ' ' + twoDigit(date.getHours() % 12) + ':' + twoDigit(date.getMinutes()) + pm;
  }

  else {
    //return new Error('Not a valid input country');
    throw 'not a valid country input'
  }


  return datestring;
}

function twoDigit(number) {
  return ("0" + number).slice(-2);
=======
export function dateFormatter(date: Date, country: string): string {
  return '';
>>>>>>> 6ad8d7869cc5422683e966b393962156e4d5b336
}
