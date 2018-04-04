
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';



export const converter = {
  toArabic: function(roman): number {
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romani = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const position = romani.indexOf(roman);
    const result = decimal[position];
    return result ;
  },

  toRoman: function(arabic): string {
    let result = '';
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (let i = 0; i <= decimal.length; i++) {
      while (arabic % decimal[i] < arabic) {
        result += roman[i];
        arabic -= decimal[i];
      }
    }
    return result;
  }
};
