export const dateSerialiser = {
  serialise: function(anObject, type): string {
    if ( type === 'UTC' ) {
      anObject.birthday = anObject.birthday.getTime();
      anObject.deathday = anObject.deathday.getTime();
    } else if (  type === 'ISO' ) {

      anObject.birthday.setHours(24);
      anObject.deathday.setHours(24);
      anObject.birthday = anObject.birthday.toISOString().slice(0, 10);
      anObject.deathday = anObject.deathday.toISOString().slice(0, 10);
    }
    return JSON.stringify(anObject);
  },
  deserialise: function(json): any {
    const person = JSON.parse(json);

    person.birthday = new Date(person.birthday);
    person.birthday.setHours(0);

    person.deathday = new Date(person.deathday);
    person.deathday.setHours(0);

    return person;
  }
};
