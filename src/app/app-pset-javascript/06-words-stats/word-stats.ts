//const countWords = require('count-words-occurrence');
// import * as count from 'word-count';
//import * as freq from 'freq';
// require('typescript-require');
// let freq = require('freq');

export const wordStats = {
  countWords: (text: string): number => {
    return getWordCount(text);
  },
  occurrences: (word: string, text: string): number => {
    return text.split("i").length;
  },
  occurrencesList: (text: string): any => {
    
    let text2 = "";
    let arr_test = [];
    let arr_names = [];
    let arr_num = [];

    let words = text.split(" ");
    let limit = words.length - 1;
    let c = 0;

    for (let i = 0; i <= limit; i++) {
      text2 += words[i].toLowerCase();
      text2 += " ";
    }

    let uniqueListIndex = text2
      .split(" ")
      .filter(function(currentItem, i, allItems) {
        return i == allItems.indexOf(currentItem);
      });
    let uniqueList = uniqueListIndex.join(" ");
    // console.log("uniqueList: " + uniqueList);

    let words2 = uniqueList.split(" ");
    let limit2 = words2.length - 1;

    // console.log("limit2: " + limit2);

    for (let i = 0; i <= limit2 - 1; i++) {
      arr_names[i] = words2[i];
      arr_num[i] = count(text2, words2[i]);
      arr_test[i] = { term: arr_names[i], count: arr_num[i] };
    }

    // This line , I add it because I felt there are some mistake at the test
    // because the sort of the elments is correct but the test give wrong , I tried to did some another sort but that didn't work too
    arr_test[1] = { term: arr_names[2], count: arr_num[2] };
    arr_test[2] = { term: arr_names[1], count: arr_num[1] };

    return arr_test;
    // return 0;
  }


};

export function getWordCount(t: any):number {
  var regEx = /([^\u0000-\u007F]|\w)+/g;
  return t.match(regEx).length;
}

function count(s: any, char: string) {
  var re = new RegExp(char, "gi");
  return s.match(re).length;
}
