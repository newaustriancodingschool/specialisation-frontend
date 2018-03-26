export class SportsStats {
  people;

  constructor(csv) {

  }


  getPeople() {
    return [];
  }

  count() {
    return 0;
  }

  getYoungest(discipline = 'all') {
    return '';
  }

  getStatesOccurrences() {
    return {};
  }
}


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
