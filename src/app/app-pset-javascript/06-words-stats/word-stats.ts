export const wordStats = {
  countWords: (text): number => {
    return text.split(" ").length;
  },
  occurrences: (word, text): number => {
    let textArray = text.split(" ");
    let counter = 0;
    for (let arrayElement in textArray) {
      textArray[arrayElement].match(word.toUpperCase()) ? counter++ : null;
    }
    return counter;
  },
  occurrencesList: (text): any => {
    let textArray = text.split(" ");
    var listArray = []
    var listObject = {}
    
    this.listObject.term = textArray[0]
    this.listObject.count = 1


      for (let arrayElement in textArray) {
        object.term = textArray[arrayElement] ? counter++ : null;
      }

    for (let arrayElement in textArray) {
      let r = textArray.filter(x => x == arrayElement).length
    }
    
    return 
  }
};