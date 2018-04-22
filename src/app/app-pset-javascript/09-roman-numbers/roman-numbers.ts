//import * as toRoman from 'number-toroman';
//import * as toRoman from '../assets/js/number-toroman';
//import { toRoman } from 'number-toroman';

export const converter = {
  toArabic: function(roman: any): number {   
   return toAr(roman);

  },
  toRoman: function(arabic: number): string {   
  return toRo(arabic);

  }
  
};

export function toRo(num:number):any {  
  let result:string = '';
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while ((num % decimal[i]) < num) {     
      result += roman[i];
      //console.log(roman[i]);
      num -= decimal[i];
    }
  }
  return result;
}

export function toAr(str:string):any {  
  let result =0;
  // the result is now a number, not a string
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (String(str).indexOf(roman[i]) === 0){
      result += decimal[i];
      //console.log(result);
      str = str.replace(roman[i],'');
    }
  }
  return result;
}

