import {Person} from './person';
import {sportsParser} from './sportsParser';

export class SportsStats {
  private people: Array<Person>;

  constructor(csv: string) {
    this.people = sportsParser.parseCsv(csv);
  }

  getPeople() {
    return this.people;
  }

  count() {
    return this.people.length;
  }

  getYoungest(discipline = 'all') {
    return this.people
      .filter(person => discipline === 'all' || person.discipline === discipline)
      .sort((a, b) => a.birthday.getTime() > b.birthday.getTime() ? 1 : -1)
      .map(person => person.firstname + ' ' + person.lastname)
      .pop();
  }

  getStatesOccurrences() {
    const occurrences: {[key: string]: number} = {};
    this.people.forEach(person => {
      if (occurrences[person.state]) {
        occurrences[person.state] += 1;
      } else {
        occurrences[person.state] = 1;
      }
    });

    return Object.getOwnPropertyNames(occurrences)
      .map(state => ({name: state, count: occurrences[state]}))
      .sort((a, b) => {
        if (a.count === b.count) {
          return a.name > b.name ? 1 : -1;
        } else {
          return b.count - a.count;
        }
      });
  }
}
