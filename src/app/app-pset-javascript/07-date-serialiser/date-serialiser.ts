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
  }
};
