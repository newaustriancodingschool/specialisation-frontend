export const wordStats = {
  countWords: (text): number => {

    const word = text.split(' ');
    return word.length;
  },
  occurrences: (word, text): number => {
    return 0;
  },
  occurrencesList: (text): any => {
  }
};
