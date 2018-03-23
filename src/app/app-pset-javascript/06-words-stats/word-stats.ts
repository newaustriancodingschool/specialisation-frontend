export const wordStats = {
  countWords: (text): number => {

    return getWordCount(text);
  },
  occurrences: (word, text): number => {
    return text.split("i").length;
  },
  occurrencesList: (text): any => {

  }
};

export function getWordCount(t)
{
    var regEx = /([^\u0000-\u007F]|\w)+/g;  
    return t.match(regEx).length;
}


function count(string,char) {
  var re = new RegExp(char,"gi");
  return string.match(re).length;
 }

