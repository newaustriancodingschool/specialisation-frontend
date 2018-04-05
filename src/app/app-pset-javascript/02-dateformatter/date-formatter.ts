import * as moment from 'moment';
import { error } from 'util';

export function dateFormatter(date: Date, country: string): string {
  if (country === 'at') {
    return moment(date).format('DD.MM.YYYY hh:mm');
  } else if (country === 'uk') {
    return moment(date).format('DD/MM/YYYY hh:mm ') + 'p.m.';
  } else if (country === 'us') {
    return moment(date).format('MM/DD/YYYY hh:mm ') + 'a.m.';
  } else {
    throw error;
  }
}
