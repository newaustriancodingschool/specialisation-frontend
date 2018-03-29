export const dateSerialiser = {
  serialise: function(anObject, type): string {
    if (type === 'UTC'){
      anObject.birthday = anObject.birthday.getTime();
      anObject.deathday = anObject.birthday.getTime();
    } else if (type === 'ISO'){
      anObject.birthday = anObject.birthday.toISOString().match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
      anObject.deathday = anObject.birthday.getTime();

    }
    return JSON.stringify(anObject);
  },
  deserialise: function(json): any {

  }
};
