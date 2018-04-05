import * as moment from 'moment';

interface Composer {
  firstname: string;
  lastname: string;
  birthday: Date ;
  deathday: Date ;
}

export enum DateType {
  ISO,
  UTC
}

export const dateSerialiser = {
  serialise: function (anObject: Composer, type: DateType): string {
    if (type === DateType.ISO ) {
      anObject.birthday = new Date(anObject.birthday);
      anObject.deathday = new Date(anObject.deathday);

      const result = JSON.stringify(anObject, function (key, value) {
        if (key === 'birthday') {
          const converter = new Date(value);
          const Transformer = converter.getTime();
          return Transformer;
        } else if (key === 'deathday') {
          const converter = new Date(value);
          const Transformer = converter.getTime();
          return Transformer;
        } else {
          return value;
        }
      });
      return result;
    } else if (type === DateType.UTC) {

      anObject.birthday.setHours(24);
      anObject.deathday.setHours(24);
      anObject.birthday = new Date (anObject.birthday.toISOString().slice(0, 10));
      anObject.deathday = new Date (anObject.deathday.toISOString().slice(0, 10));
      return JSON.stringify(anObject);
    }
    return '';
  },
  deserialise: function(json: string): Composer {
    const person = JSON.parse(json);

    person.birthday = new Date (person.birthday);
    person.birthday.setHours(0);

    person.deathday = new Date (person.deathday);
    person.deathday.setHours(0);

    return person;
  }
};
