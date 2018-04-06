//import { text } from "@angular/core";

export const wordStats = {
  countWords: (text): number => {
    return text.split(" ").length;
  },

  occurrences: (word, text): number => {
    var count = (text.match(/I/g) || []).length;
    return count;
  },

  occurrencesList: (text): any => {
    let arrObj = [];
    function Object(term, count) {
      (this.term = term), (this.count = count);
    }

    //Convert the text to lower case to calculate all the rose together
    let LowerCasetext = text.toLowerCase();

    let sentence = [];
    sentence = LowerCasetext.split(" ");
    let sortedArr = [],
      counter = 1;
    //Sort the array
    sortedArr = sentence.sort();
    //Two loops for matching and calculate the same word
    for (var i = 0; i < sortedArr.length; i = i + counter) {
      counter = 1; //to reset the counter
      for (var j = i + 1; j < sortedArr.length; j++) {
        if (sortedArr[i] === sortedArr[j]) counter++;
      }
      // I got the right result but I couldn't get the right form
      let obj = new Object(sortedArr[i], counter);
      arrObj.push(obj);
    }
    return arrObj;
  }
};
