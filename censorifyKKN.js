var censoredWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];

function censor(inStr)
{
    for(i in censoredWords)
    {
        inStr = inStr.replace(censoredWords[i], "****");
    }
    for(i in customCensoredWords)
    {
        inStr = inStr.replace(censoredWords[i], "****");
    }
    return inStr;
}

function addCensoredWord(word){
    customCensoredWords.push(word);
}

function getCensoredWords()
{
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;