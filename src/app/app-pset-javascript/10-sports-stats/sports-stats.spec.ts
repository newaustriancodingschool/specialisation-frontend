import {SportsStats} from './sports';
import {Person} from './person';

const csv = [
  'Hans,Krankl, Wien,Fußball,1953-02-14',
  'Franz,Klammer,Kärnten,Skifahren,1953-12-03',
  'Thomas,Muster,Steiermark,tennis,1967-10-02',
  'Niki,Lauda,wien,Formel 1,1949-2-22',
  'Dominik,thiem,Niederösterreich, Tennis ,1993-09-03',
  'Hermann,Maier,Salzburg,Skifahren,1972-12-7',
  'Marcel,Hirscher,Salzburg,Skifahren,1989-3-2',
  'Otto,Konrad,Steiermark,Fußball,1964-11-1',
  'Georg,Totschnig,Tirol,Radfahren,1971-5-25',
  'Gerhard,Berger,Tirol,Formel 1,1959-8-27',
  'Andreas,Herzog,Wien,Fußball,1968-10-10'
].join('\n');

describe('10 - Sports Stats', () => {
  it('should return a person', () => {
    const line = 'Hans,Krankl,Wien,Fußball,1953-2-14';
    const krankl = new Person('Hans', 'Krankl', 'Wien', 'Fußball', new Date(1953, 1, 14));
    const parsedKrankl = new SportsStats(line).getPeople()[0];
    expect(parsedKrankl).toEqual(krankl);
  });
  it('should return people', () => {
    const lines = [
      'Franz,Klammer,Kärnten,Skifahren,1953-12-3',
      'Thomas,Muster,Steiermark,Tennis,1967-10-2',
    ].join('\n');
    const klammer = new Person('Franz', 'Klammer', 'Kärnten', 'Skifahren', new Date(1953, 11, 3));
    const muster = new Person('Thomas', 'Muster', 'Steiermark', 'Tennis', new Date(1967, 9, 2));
    const people = new SportsStats(lines).getPeople();
    expect(people[0]).toEqual(klammer);
    expect(people[1]).toEqual(muster);
  });
  it('should count the people', () => {
    expect(new SportsStats(csv).count()).toBe(11);
  });
  it('should get the youngest person', () => {
    expect(new SportsStats(csv).getYoungest()).toBe('Dominik Thiem');
  });
  it('should get the youngest in discipline', () => {
    expect(new SportsStats(csv).getYoungest('Skifahren')).toBe('Marcel Hirscher');
  });
  it('should get an occurrence list per state in descending order', () => {
    expect(new SportsStats(csv).getStatesOccurrences()).toEqual([
      {name: 'Wien', count: 3},
      {name: 'Salzburg', count: 2},
      {name: 'Steiermark', count: 2},
      {name: 'Tirol', count: 2},
      {name: 'Kärnten', count: 1},
      {name: 'Niederösterreich', count: 1}
    ]);
  });
});
