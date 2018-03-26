let occurancesArray = [
    {term: 'rose', count: 4}
];
let text = 'a rose is beer is a rose';
let wordArray = getWords(text);
for (let checkWord of wordArray) {
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
    checkAndAdd(checkWord);
}

function getWords (text) {
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