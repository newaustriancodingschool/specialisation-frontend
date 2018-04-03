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


[
  {term: 'rose', count: 4},
  {term: 'a', count: 3},
  {term: 'is', count: 3}
]



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
      if (sortedArr[i].toUpperCase() === sortedArr[j].toUpperCase()) {}
        count++;
      
          object.term:"sortedArr[i]",
          count:"count",
            
    }
    //return ("term: '" + sortedArr[i] + "', count:" + count + "<br>");
  }
}