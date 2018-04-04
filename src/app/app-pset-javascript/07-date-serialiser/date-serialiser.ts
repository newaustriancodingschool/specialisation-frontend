export enum DateType {
  ISO,
  UTC
}


export const dateSerialiser = {
  serialise: function(anObject, type): string {
  return type;
    if (type == 0){
      anObject.birthday = anObject.birthday.getTime();
      anObject.deathday = anObject.deathday.getTime();
    } else if (type ==1){
      anObject.birthday = anObject.birthday.toISOString().slice(0,10);
      anObject.deathday = anObject.deathday.toISOString().slice(0,10);
    }
    return JSON.stringify(anObject);
  },
  deserialise: function(json): any {
    return'';
  }
};