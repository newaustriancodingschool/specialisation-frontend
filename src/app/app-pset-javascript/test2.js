var _this = this;
var wordStats = {
    countWords: function (text) {
        var words = this.getWords(text);
        return words.length;
    },
    occurrences: function (word, text) {
        return 0;
    },
    occurrencesList: function (text) {
    },
    getWords: function (text) {
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
};
var stats = wordStats.countWords('hello world');
console.log(stats);
