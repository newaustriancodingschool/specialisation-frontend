const voca = require('voca');

export const wordStats = {
  countWords: (text: string): number => {
    return voca.countWords(text);
  },
  occurrences: (word: string, text: string): number => {
    word = voca.upperCase(word);
    return voca.countSubstrings(text, word);
  },
  occurrencesList: (text: string) => {
    text = voca.lowerCase(text);
    const arrText = new Array();
    for ( let i = 0 ; i < 3; i++ ) {
      arrText[i] = { term: voca.words(text)[i], count: voca.countSubstrings(text, voca.words(text)[i])};
    }
    return arrText;
  }
};
