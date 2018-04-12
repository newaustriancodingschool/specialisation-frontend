import { validateConfig } from "@angular/router/src/config";

export const converter = {
  toArabic: function(roman): number {
    let romanArray: Array<string> = roman.split(""),
        numberKeys: object = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000},
        arabicNumber: number = 0;
        
    for (let i = romanArray.length-1; i >= 0; i--) {  
      if (numberKeys[romanArray[i+1]] <= numberKeys[romanArray[i]] || i == romanArray.length-1)
        arabicNumber += numberKeys[romanArray[i]];
      else
        arabicNumber -= numberKeys[romanArray[i]];
    }
    return arabicNumber;
  },
  toRoman: function(arabic): string {
    return '';
  }
}
