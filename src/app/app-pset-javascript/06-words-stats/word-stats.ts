//import { text } from "@angular/core";

export const wordStats = {
  countWords: (text): number => {
    return text.split(' ').length;
  },
  occurrences: (word, text): number => {
  var count = (text.match(/I/g) || []).length;
  return count;
  },
  occurrencesList: (text): any => {
    var object = {};
    let sentence = [] ;

    sentence = text.split(" ");
    let sortedArr = [],
    count = 1;
    sortedArr = sentence.sort();
    for (var i = 0; i < sortedArr.length; i = i + count) {
      count = 1; //to reset the counter
      for (var j = i + 1; j < sortedArr.length; j++) {
        if (sortedArr[i].toUpperCase() === sortedArr[j].toUpperCase())
          count++;
         
            //term:"sortedArr[i]",
            //count:"count",
              
      }
      //return ("term: '" + sortedArr[i] + "', count:" + count + "<br>");
    }
  }
};  
  