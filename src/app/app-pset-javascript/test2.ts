const wordStats = {
    countWords: (text): number => {
      let words = this.getWords(text);
      return words.length;
    },
    occurrences: (word, text): number => {
      return 0;
    },
    occurrencesList: (text): any => {
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

  console.log(wordStats.countWords('hello world'));