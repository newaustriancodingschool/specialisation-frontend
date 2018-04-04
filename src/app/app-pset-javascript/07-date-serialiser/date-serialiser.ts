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
<<<<<<< HEAD
  serialise: function(anObject, type): string {
    if (type === 'UTC'){
      anObject.birthday = anObject.birthday.getTime();
      anObject.deathday = anObject.birthday.getTime();
    } else if (type === 'ISO'){
      anObject.birthday = anObject.birthday.toISOString().slice(0,10);
      anObject.deathday = anObject.deathday.toISOString().slice(0,10);

    }
    return JSON.stringify(anObject);
  },
  deserialise: function(json): any {
    return JSON.stringify(json)
=======
  serialise: function(anObject: Composer, type: DateType): string {
    return '';
  },
  deserialise: function(json: string): Composer {
    return {
      firstname: '',
      lastname: '',
      birthday: new Date(),
      deathday: new Date()
    };
>>>>>>> eb9e0dba3bb8d8a5557d0871598b009c60e2ef1d
  }
};