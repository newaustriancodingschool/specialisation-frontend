
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
  serialise: function(anObject: Composer, type: DateType): any {

    if(type == DateType.UTC)
    {
      // console.log("birthday::"+anObject.birthday);
      let firstname:string = anObject.firstname;
      let lastname:string = anObject.lastname;
      let birthday:Date = new Date(anObject.birthday.getTime());
      let deathday:Date = new Date(anObject.deathday.getTime());

      // console.log("birthday :" + birthday);

      return JSON.stringify([new String(firstname), new String(lastname), birthday , deathday ]);


      // let myJSON = JSON.stringify(anObject);
      // return myJSON;
    }

    return JSON.stringify(anObject);


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

// <<<<<<< HEAD
// export const dateSerialiser = {
//   serialise: function(anObject, type): string {

//     if(type == "UTC")
//     {
//       anObject.birthday = anObject.birthday.getTime();
//       anObject.deathday = anObject.deathday.getTime();


//       let myJSON = JSON.stringify(anObject);
//       return myJSON;
//     }
//     else if (type == "ISO")
//     {
//       //anObject.birthday = new Date(anObject.birthday);
//       //let Newbirthday = anObject.birthday.getFullYear() + "-" + anObject.birthday.getMonth() + "-" + anObject.birthday.getDate(); 
//       //anObject.deathday = anObject.deathday.getTime();
      
      
//       anObject.birthday = new Date(anObject.birthday);
//       let Newbirthday = anObject.birthday.getFullYear() + "-" + 
//       "0" + (anObject.birthday.getMonth()+1) + "-" + anObject.birthday.getDate(); 
      

//       anObject.deathday = new Date(anObject.deathday);
//       let Newdeathday = anObject.deathday.getFullYear() + "-" + 
//       "0" + (anObject.deathday.getMonth()+1) + "-" + anObject.deathday.getDate();
      
//       anObject.birthday = Newbirthday;
//       anObject.deathday = Newdeathday;
      
//       let myJSON = JSON.stringify(anObject);
//       return myJSON;
//     }
//     else 
//     {
//       throw "Error";
//     }


//   },
//   deserialise: function(json): any {

//     // let str = JSON.stringify(json);
//     const r = JSON.parse(json);
    
         
//     r.birthday = new Date(r.birthday);
//     r.birthday.setHour(0);
       
//     r.deathday = new Date(r.deathday);
//     r.deathday.setHour(0);

//       //utc

//       //let JSON1 = JSON.stringify(anObject);
//       //myJSON    = JSON.parse(JSON1);

//       return r;
      

//   }
// };
// =======

// >>>>>>> eb9e0dba3bb8d8a5557d0871598b009c60e2ef1d
