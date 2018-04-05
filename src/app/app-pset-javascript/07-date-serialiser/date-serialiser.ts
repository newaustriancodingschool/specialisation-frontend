export const dateSerialiser = {
  serialise: function(anObject, type): string {
      if (type === 'UTC') {
        anObject.birthday = anObject.birthday.getTime();
        anObject.deathday = anObject.deathday.getTime();
      }
      else if (type === 'ISO') {
        anObject.birthday = anObject.birthday.getYear() + '-' +
        anObject.birthday.getMonth() + '-' +
        anObject.birthday.getDate();
        anObject.deathday = anObject.deathday.toISOString().slice(0,10);
        anObject.deathday = anObject.deathday.getYear() + '-' +
        anObject.deathday.getMonth() + '-' +
        anObject.deathday.getDate();
      }
    return JSON.stringify(anObject);
  },
  deserialise: function(json): any {
    return JSON.stringify(json)
  }
};
