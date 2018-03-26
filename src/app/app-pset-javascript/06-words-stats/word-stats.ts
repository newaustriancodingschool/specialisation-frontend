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
    let occurancesArray = []
    let wordArray = this.getWords(text);
    for (let checkWord of wordArray) {
      // check if it's present
      // increment if present -> break
      // add if not present
    }
    return (occurancesArray);
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

// from https://stackoverflow.com/questions/1988349/array-push-if-does-not-exist
// check if an element exists in array using a comparer function
// comparer : function(currentElement)
Array.prototype.inArray = function(comparer) { 
  comparer.toLowerCase()
  for(var i=0; i < this.length; i++) { 
      if(comparer(this[i])) return true;  // QUESTIONS: What Syntax is this
  }
  return false; 
}; 

// adds an element to the array if it does not already exist using a comparer 
// function
Array.prototype.pushIfNotExist = function(element, comparer) { 
  if (!this.inArray(comparer)) {
      this.push(element);
  }
}; 