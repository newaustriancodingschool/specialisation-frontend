interface keys {
  term: string;
  count: number;
}

export const wordStats = {
  countWords: (text: string): number => {
    return text.split(' ').length;
  },
  occurrences: (word: string, text: string): number => {
    let textArray: Array<string> = text.split(' ');
    let counter: number = 0;
    let arrayElement: string;
    for (arrayElement in textArray) {
      textArray[arrayElement].match(word.toUpperCase()) ? counter++ : null;
    }
    return counter;
  },
  occurrencesList: (text: string): any => {
    text = text.toLowerCase();
    let textArray: Array<string> = text.split(' ');
    let checkArray: Array<string> = []
    let returnObject: Array<any> = [];
    let arrayElement: string;
    for (arrayElement in textArray) {
      let wordOccurre: number, words: Array<string> | null;
      if(checkArray.indexOf(textArray[arrayElement]) == -1) {
        words = text.match(new RegExp(textArray[arrayElement], 'g'));
        if(words){
          checkArray.push(textArray[arrayElement]);
          returnObject.push({term: textArray[arrayElement], count: words.length});
        }
      }
    }
    function compareTerm(a: any,b: any): any {
      return a.term > b.term
    }
    function compareCount(a: any,b: any) {
      if (a.count < b.count)
        return 1;
      if (a.count > b.count)
        return -1;
      return 0;
    }
    returnObject.sort(compareTerm);
    returnObject.sort(compareCount);
    return returnObject;
  }
};