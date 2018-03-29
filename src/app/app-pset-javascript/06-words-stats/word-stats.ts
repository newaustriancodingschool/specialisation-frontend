//import { text } from "@angular/core";

export const wordStats = {
  countWords: (text): number => {
    return text.split(' ').length;
  },
  occurrences: (word, text): number => {
  var sentence = "I write this text, where I don\'t use lower cases for I";
  var count = (sentence.match(/I/g) || []).length;
  return count;
  },
  occurrencesList: (text): any => {
    let sentence = [] ;
    sentence = text.split(" ");
  
    let counterwords = [];
    //var countnum;
    //var currentword;
  
    sentence.sort();
    var sentlength = sentence.length ;
    for (var i=0 ; i< sentlength ; i++ ){
      counterwords[sentence[i]] = (counterwords[counterwords[i]] || 0) + 1;
    }
    console.log(counterwords);
  }
};