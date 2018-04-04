interface Composer {
  firstname: string;
  lastname: string;
  birthday: Date;
  deathday: Date;
}

export enum DateType {
  ISO,
  UTC
}

export const dateSerialiser = {
  serialise: function(anObject, type): string {
    if (type === 'UTC'){
      anObject.birthday = anObject.birthday.getTime();
      anObject.deathday = anObject.birthday.getTime();
    } else if (type === 'ISO'){
      anObject.birthday = anObject.birthday.toISOString().slice(0,10);
      anObject.deathday = anObject.deathday.toISOString().slice(0,10);

    }
    return serialise.SerializeObject(anObject);
  },
  deserialise: function(json): any {
    return deserialise.DeserializeObject<Composer>(json);
  }
};