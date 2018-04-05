export const converter = {
  toArabic: function(roman): number {
    var arabic = 0;
    var lookup = [
      {roman: 'M', value: 1000},
      {roman: 'CM', value: 900},
      {roman: 'D', value: 500},
      {roman: 'CD', value: 400},
      {roman: 'C', value: 100},
      {roman: 'XC', value: 90},
      {roman: 'L', value: 50},
      {roman: 'XL', value: 40},
      {roman: 'X', value: 10},
      {roman: 'IX', value: 9},
      {roman: 'V', value: 5},
      {roman: 'IV', value: 4},
      {roman: 'I', value: 1}
    ];
    for (let romanIndex = 0, val = 0; romanIndex < roman.length; romanIndex++) {
      // if digits match, increment
      let digitLength = lookup[val].roman.length;
      let checkDigit = roman.substr(romanIndex, digitLength);
      while (checkDigit != lookup[val].roman) {
        val++;
        digitLength = lookup[val].roman.length;
        checkDigit = roman.substr(romanIndex, digitLength);
      }
      arabic += lookup[val].value;
      // if none match, increment value
    }
    return arabic;
  },
  toRoman: function(arabic): string {
    var roman = ''
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    for (let i in lookup ) {
      while ( arabic >= lookup[i] ) {
        roman += i;
        arabic -= lookup[i];
      }
    }
    return roman;
  }
};
