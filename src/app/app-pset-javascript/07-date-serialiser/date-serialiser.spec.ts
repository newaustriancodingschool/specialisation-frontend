
import {dateSerialiser, DateType} from './date-serialiser';

describe('07 - Date Serialser and Deserialiser to send and ' +
  'receive JSON data containing date vales', () => {
  it('should serialise a simple object with UTC seconds', () => {
    const mozart = {
      firstname: 'Wolfgang Amadeus',
      lastname: 'Mozart',
      birthday: new Date(1756, 0, 27),
      deathday: new Date(1791, 11, 5)
    };

    expect(dateSerialiser.serialise(mozart, DateType.ISO))
      .toEqual('{"firstname":"Wolfgang Amadeus","lastname":"Mozart",' +
        '"birthday":-6750954000000,"deathday":-5619459600000}');
  });
  it('should serialise a simple object with UTC seconds', () => {
    const haydn = {
      firstname: 'Joseph',
      lastname: 'Haydn',
      birthday: new Date(1723, 2, 31),
      deathday: new Date(1809, 4, 31),
      birthplace: 'Rohrau'
    };

    expect(dateSerialiser.serialise(haydn, DateType.ISO))
      .toEqual('{"firstname":"Joseph","lastname":"Haydn",' +
        '"birthday":"1723-03-31","deathday":"1809-05-31"}');
  });
  it('should deserialise only properties ending with *day', () => {
    const schubert = {
      firstname: 'Franz',
      lastname: 'Schubert',
      birthday: new Date(1797, 0, 31),
      deathday: new Date(1828, 10, 19)
    };
    const json = '{"firstname":"Franz","lastname":"Schubert",' +
      '"birthday":"1797-01-31","deathday":-4453232400000}';

    expect(dateSerialiser.deserialise(json)).toEqual(schubert);
  });
});
// >>>>>>> eb9e0dba3bb8d8a5557d0871598b009c60e2ef1d

// <<<<<<< HEAD
// import {dateSerialiser} from './date-serialiser';

// describe('07 - Date Serialser and Deserialiser to send and ' +
//   'receive JSON data containing date vales', () => {
//   it('should serialise a simple object with UTC seconds', () => {
//     const mozart = {
//       firstname: 'Wolfgang Amadeus',
//       lastname: 'Mozart',
//       birthday: new Date(1756, 0, 27),
//       deathday: new Date(1791, 11, 5)
//     };

//     expect(dateSerialiser.serialise(mozart, 'UTC'))
//       .toEqual('{"firstname":"Wolfgang Amadeus","lastname":"Mozart",' +
//         '"birthday":-6750954000000,"deathday":-5619459600000}');
//   });
//   it('should serialise a simple object with UTC seconds', () => {
//     const haydn = {
//       firstname: 'Joseph',
//       lastname: 'Haydn',
//       birthday: new Date(1723, 2, 31),
//       deathday: new Date(1809, 4, 31)
//     };

//     expect(dateSerialiser.serialise(haydn, 'ISO'))
//       .toEqual('{"firstname":"Joseph","lastname":"Haydn",' +
//         '"birthday":"1723-03-31","deathday":"1809-05-31"}');
//   });
//   it('should deserialise only properties ending with *day', () => {
//     const schubert = {
//       firstname: 'Franz',
//       lastname: 'Schubert',
//       birthday: new Date(1797, 0, 31),
//       deathday: new Date(1828, 10, 19)
//     };

//     const json = '{"firstname":"Franz","lastname":"Schubert",' +
//       '"birthday":"1797-01-31","deathday":-4454010000000}';

//     expect(dateSerialiser.deserialise(json)).toEqual(schubert);
//   });
// });
// =======
