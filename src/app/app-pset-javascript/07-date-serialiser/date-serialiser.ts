import { findReadVarNames, TYPED_NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import * as moment from 'moment'

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
    if (type == DateType.UTC) {
      return JSON.stringify({
        firstname: anObject.firstname,
        lastname: anObject.lastname,
        birthday: anObject.birthday.getTime(),
        deathday: anObject.deathday.getTime()
      });
    } else {
      return JSON.stringify({
        firstname: anObject.firstname,
        lastname: anObject.lastname,
        birthday: moment(anObject.birthday).format("YYYY-MM-DD"),
        deathday: moment(anObject.deathday).format("YYYY-MM-DD")
      });
    }
  },
  deserialise: function(json: string): any {
    let myJson: Composer = JSON.parse(json);
    return {
      firstname: myJson.firstname,
      lastname: myJson.lastname,
      birthday: new Date(new Date(myJson.birthday).setHours(0)),
      deathday: new Date(myJson.deathday)
    };
  }
};
