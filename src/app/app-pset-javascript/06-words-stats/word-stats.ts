// I get the error that there is no function called getWords. Can I not call functions using. this.getWords()?

export const wordStats = {
  countWords: (text): number => {
    let words = this.getWords(text);
    return words.length;
  },
  occurrences: (word, text): number => {
    word.toLowerCase();
    let wordArray = this.getWords(text);
    let counter = 0;
    for (let checkWord of wordArray) {
      if (checkWord == word)
        counter ++
    }
    return 0;
  },
  occurrencesList: (text): any => {
    // create an array to add object with the words and their occurances 
    // TODO: Create new prototype function to the Array. 
    // QUESTION: Where to add this function? prototype of Array, or where_
    let occurancesArray = []
    let wordArray = this.getWords(text);
    for (let checkWord of wordArray) {
        checkAndAdd(checkWord);
    }
    function checkAndAdd(checkWord) {
      let foundAndIncremented = occurancesArray.some(function (el) {
          if (el.term === checkWord) {
              el.count++;
              return true;
          }
      });
      if (!foundAndIncremented){
          occurancesArray.push({term: checkWord, count: 1})
      }
    }
    return occurancesArray;
  },
  getWords: (text): any => {
    let realWordArray = new Array();
    text = text.toLowerCase();
    let wordArray = text.split(/[. \n!?;:]/);
    let notChar = /[^a-z]/
    for (let word of wordArray) {
        let wordLength = word.length;
        for(let i = 0; i < wordLength; i++) {
            if (notChar.test(word.charAt(i))){
                break;
            }
            if (i = wordLength) {
                realWordArray.push(word);
            }
        }
    }
    return realWordArray;
  }
};