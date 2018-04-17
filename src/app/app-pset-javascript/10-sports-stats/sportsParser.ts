import {Person} from './person';

export const sportsParser = {
  parseCsv: function(lines: string) {
    return lines.split('\n').map(sportsParser.parseCsvLine);
  },

  parseCsvLine: function(line: string) {
    const [firstname, lastname, state, discipline, birthdayStr] = line
      .split(',').map(sportsParser.cleanWord);
    const [, year, month, day] = birthdayStr
      .match(/(\d{4})-(\d{1,2})-(\d{1,2})/) as Array<string>;
    const birthday = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
    return new Person(firstname, lastname, state, discipline, birthday);
  },

  cleanWord: function(word: string) {
    return word
      .trim()
      .replace(/^\w/, char => char.toUpperCase());
  }
};
