import { validateConfig } from "@angular/router/src/config";

export const converter = {
  toArabic: function(roman: string): number {
    let romanArray: Array<string> = roman.split(""),
        numberKeys: object = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000},
        arabic: number = 0;
        
    for (let i = romanArray.length-1; i >= 0; i--) {  
      if (numberKeys[romanArray[i+1]] <= numberKeys[romanArray[i]] || i == romanArray.length-1)
        arabic += numberKeys[romanArray[i]];
      else
        arabic -= numberKeys[romanArray[i]];
    }
    return arabic;
  },
  toRoman: function(arabic: number): string {
    let numberKeys: Array<any> = [['I', 1], ['IV', 4], ['V', 5], ['IX', 9], ['X', 10], ['XL', 40], ['L', 50], ['XC', 90], ['C', 100], ['CD', 400], ['D', 500], ['CM', 900], ['M', 1000]],
        roman: string = '',
        i: number = 12;

    while (arabic != 0) {
      if (arabic >= numberKeys[i][1]) {
        arabic -= numberKeys[i][1];
        roman += numberKeys[i][0];
      } else {
        i--;
      }
    }
    return roman;
  }
}
