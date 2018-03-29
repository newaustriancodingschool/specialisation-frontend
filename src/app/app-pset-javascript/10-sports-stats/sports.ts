export class SportsStats {
  people;

  constructor(csv) {
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
      .sort((a, b) => a.birthday.getTime() > b.birthday.getTime())
      .map(person => person.firstname + ' ' + person.lastname)
      .pop();
  }

  getStatesOccurrences() {
    const occurrences = {};
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

const sportsParser = {
  parseCsv: function(lines) {
    return lines.split('\n').map(sportsParser.parseCsvLine);
  },

  parseCsvLine: function(line) {
    const [firstname, lastname, state, discipline, birthdayStr] = line
      .split(',').map(sportsParser.cleanWord);
    const [, year, month, day] = birthdayStr
      .match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
    const birthday = new Date(year, month - 1, day);
    return new Person(firstname, lastname, state, discipline, birthday);
  },

  cleanWord: function(word) {
    return word
      .trim()
      .replace(/^\w/, char => char.toUpperCase());
  }
};


export class Person {
  firstname;
  lastname;
  state;
  discipline;
  birthday;

  constructor(firstname, lastname, state, category, birthday) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.state = state;
    this.discipline = category;
    this.birthday = birthday;
  }
}