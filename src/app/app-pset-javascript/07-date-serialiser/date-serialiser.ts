export const dateSerialiser = {
  serialise: function(anObject, type): string {
    if(type == "UTC")
    {
      anObject.birthday = anObject.birthday.getTime();
      anObject.deathday = anObject.deathday.getTime();

      let myJSON = JSON.stringify(anObject);
      return myJSON;
    }
    else if (type == "ISO")
    {
      //anObject.birthday = new Date(anObject.birthday);
      //let Newbirthday = anObject.birthday.getFullYear() + "-" + anObject.birthday.getMonth() + "-" + anObject.birthday.getDate(); 
      //anObject.deathday = anObject.deathday.getTime();
      
      anObject.birthday = new Date(anObject.birthday);
      let Newbirthday = anObject.birthday.getFullYear() + "-" + 
      "0" + (anObject.birthday.getMonth()+1) + "-" + anObject.birthday.getDate(); 
      

      anObject.deathday = new Date(anObject.deathday);
      let Newdeathday = anObject.deathday.getFullYear() + "-" + 
      "0" + (anObject.deathday.getMonth()+1) + "-" + anObject.deathday.getDate();
      
      anObject.birthday = Newbirthday;
      anObject.deathday = Newdeathday;
      
      let myJSON = JSON.stringify(anObject);
      return myJSON;
    }
    else 
    {
      let myJSON = JSON.parse(anObject);
      myJSON.birthday = new Date(myJSON.birthday);
      myJSON.deathday = new Date(myJSON.deathday);

      //let JSON1 = JSON.stringify(anObject);
      //myJSON    = JSON.parse(JSON1);

      return myJSON;
      
    }


  },
  deserialise: function(json): any {

  }
};
