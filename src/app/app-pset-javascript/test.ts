const wordStats = {
    countWords: (text): number => {
      let words = this.getWords(text);
      return words.length;
    },
    occurrences: (word, text): number => {
      let wordArray = this.getWords(text);
      let counter = 0;
      for (let checkWord of wordArray) {
        if (checkWord == word)
          counter ++
      }
      return 0;
    },
    occurrencesList: (text): any => {
      // create an object with the words and their occurances in the text. 
      let occurancesObject = {}
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
  
  console.log(wordStats.occurrences('hello', 'hello world, hello alex, hello, nour.'))
  