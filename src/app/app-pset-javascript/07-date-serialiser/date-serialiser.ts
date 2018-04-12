interface Composer {
  firstname: string;
  lastname: string;
  birthday: Date;
  deathday: Date;
}

export enum DateType {
  UTC,
  ISO
}

export const dateSerialiser = {
  serialise: function(anObject: Composer, type: DateType): string {
    anObject.birthday = new Date(anObject.birthday.getTime());
    anObject.deathday = new Date(anObject.deathday.getTime());
    return JSON.stringify(anObject);
  },
  deserialise: function(json: string): Composer {
    let myJson: Composer = JSON.parse(json);
    return {
      firstname: myJson.firstname,
      lastname: myJson.lastname,
      birthday: new Date(myJson.birthday),
      deathday: new Date(myJson.deathday)
    };
  }
};
