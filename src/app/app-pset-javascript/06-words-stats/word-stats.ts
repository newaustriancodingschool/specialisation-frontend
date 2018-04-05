// I get the error that there is no function called getWords. Can I not call functions using. this.getWords()?

export const wordStats = {
<<<<<<< HEAD
  countWords: (text): number => {
    let words = wordStats.getWords(text);
    return words.length;
  },
  occurrences: (word, text): number => {
    word.toLowerCase();
    let wordArray = wordStats.getWords(text);
    let counter = 0;
    for (let checkWord of wordArray) {
      if (checkWord == word)
        counter++;
    }
    return counter;
  },
    occurrencesList: (text): any => {
        // create an array to add object with the words and their occurances 
        // TODO: Create new prototype function to the Array. 
        // QUESTION: Where to add this function? prototype of Array, or where_
        let occurancesArray = []
        let wordArray = wordStats.getWords(text);
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
        return occurancesArray.sort(function (a, b) {
            if (a.count == b.count){
                var nameA = a.term.toUpperCase(); // ignore upper and lowercase
                var nameB = b.term.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            } 
            else return a.value - b.value;
        });
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
=======
  countWords: (text: string): number => {
    return 0;
  },
  occurrences: (word: string, text: string): number => {
    return 0;
  },
  occurrencesList: (text: string): any => {
  }
};
>>>>>>> 6ad8d7869cc5422683e966b393962156e4d5b336
