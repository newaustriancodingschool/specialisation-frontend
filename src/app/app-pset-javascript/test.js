// import {erlkoenig} from './06-words-stats/erlkoenig';
var text2 = 'this is a test.\ni hope that it works. :) ';
var words = getWords(text2);
console.log(words.length);
function getWords(text) {
    var realWordArray = new Array();
    text = text.toLowerCase();
    var wordArray = text.split(/[. \n!?;:]/);
    var notChar = /[^a-z]/;
    for (var _i = 0, wordArray_1 = wordArray; _i < wordArray_1.length; _i++) {
        var word = wordArray_1[_i];
        var wordLength = word.length;
        for (var i = 0; i < wordLength; i++) {
            if (notChar.test(word.charAt(i))) {
                break;
            }
            if (i = wordLength) {
                realWordArray.push(word);
            }
        }
    }
    return realWordArray;
}
// let wordCounter = 0;
// wordArray.forEach(){
// }
// let length = text.length;
// for (var i = 0; i < length; i++) {
//     if (text[i] = ' '){
//         wordCounter++;
//         while (text[i+1] == ' ') {
//             i++;
//         }
//     }      
// }
