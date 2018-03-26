const mozart = {
    firstname: 'Wolfgang Amadeus',
    lastname: 'Mozart',
    birthday: new Date(1756, 0, 27),
    deathday: new Date(1791, 11, 5)
  };

const dateSerialiser = {
    serialise: function(anObject, type){
      function replacer(key,value) {
            console.log(key.toString());
            var isDay = /day$/
            if (type == 'UTC' && isDay.test(key)) {
                // somehow I don't manage to get the property name to be checked by regex. 
                let UTCString = this.toUTCString();
                console.log(UTCString);
                return UTCString
            }
            else if (type == 'ISO' && isDay.test(key)) {
                value.toISOString();
                console.log(value);
            }
      }
      return JSON.stringify(anObject, replacer);
    },
    deserialise: function(json) {
  
    }
  };
console.log(dateSerialiser.serialise(mozart, 'UTC'));