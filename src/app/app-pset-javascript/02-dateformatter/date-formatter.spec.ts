import {dateFormatter} from './date-formatter';

describe('02 - Date Formatter', () => {
  it('should format a date in German/Austrian style', () => {
    const date = new Date(2017, 2, 1);
    date.setHours(12, 5);

    expect(dateFormatter(date, 'at')).toEqual('01.02.2017 12:05');
  });


  it('should format a date in UK style', () => {
    const date = new Date(2017, 1, 1);
    date.setHours(15, 12);

    expect(dateFormatter(date, 'uk')).toEqual('01/02/2017 03:12 p.m.');
  });


  it('should format a date in US style', () => {
    const date = new Date(2017, 4, 30);
    date.setHours(6, 45);

    expect(dateFormatter(date, 'us')).toEqual('05/30/2017 06:45 a.m.');
  });


  it('should throw an error on unknown country', () => {
    expect(() => dateFormatter(new Date(), 'de'))
      .toThrow();
  });
});
