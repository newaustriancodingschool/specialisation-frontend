// import { Data } from "@angular/router";


// export class SportsStats {
//   people:any;

//   constructor(csv:any) {
//     this.people = sportsParser.parseCsv(csv);
//   }


//   getPeople() {
//     return this.people;
//   }

//   count() {
//     return this.people.length;
//   }

//   getYoungest(discipline = 'all') {
//     return this.people
//       .filter(person:any => discipline === 'all' || person.discipline === discipline)
//       .sort((a:string, b:string) => a.birthday.getTime() > b.birthday.getTime())
//       .map(person:any => person.firstname + ' ' + person.lastname)
//       .pop();
//   }

//   getStatesOccurrences() {
//     const occurrences = {};
//     this.people.forEach(person:Person => {
//       if (occurrences[person.state]) {
//         occurrences[person.state] += 1;
//       } else {
//         occurrences[person.state] = 1;
//       }
//     });

//     return Object.getOwnPropertyNames(occurrences)
//       .map(state => ({name: state, count: occurrences[state]}))
//       .sort((a, b) => {
//         if (a.count === b.count) {
//           return a.name > b.name ? 1 : -1;
//         } else {
//           return b.count - a.count;
//         }
//       });
//   }
// }

// const sportsParser = {
//   parseCsv: function(lines:string) {
//     return lines.split('\n').map(sportsParser.parseCsvLine);
//   },

//   parseCsvLine: function(line:string) {
//     const [firstname, lastname, state, discipline, birthdayStr] = line
//       .split(',').map(sportsParser.cleanWord);
//     const [, year, month, day]:any = birthdayStr
//       .match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
//     const birthday:Data = new Date(year, month - 1, day);
//     return new Person(firstname, lastname, state, discipline, birthday);
//   },

//   cleanWord: function(word:string) {
//     return word
//       .trim()
//       .replace(/^\w/, char => char.toUpperCase());
//   }
// };

// export class Person 
// {
//   firstname:string;
//   lastname:string;
//   state:string;
//   discipline:string;
//   birthday:Data;

//     constructor(firstname:string, lastname:string, state:string, category:string, birthday:Data) 
//     {
//       this.firstname = firstname;
//       this.lastname = lastname;
//       this.state = state;
//       this.discipline = category;
//       this.birthday = birthday;
//     }


// }
