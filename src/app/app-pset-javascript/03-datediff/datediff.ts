
import * as moment from 'moment';

export function datediff(first: Date, second: Date): number 
{

  const firstMoment = moment(first).startOf('day');
  const secondMoment = moment(second).startOf('day');

  return Math.abs(firstMoment.diff(secondMoment, 'days', true));

}

    // first.setHours(0);
    // second.setHours(0);

    // let day = 1000 * 60 * 60 * 24;
    // let result = 0;

    // if (first < second)
    // {
    //     result=Math.round((second.getTime() - first.getTime())/day);
    // }
    // else
    // {
    //     result=Math.round((first.getTime() - second.getTime())/day);  
    // }

