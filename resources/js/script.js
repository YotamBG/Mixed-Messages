let chosenWords = {noun: '', verb: '', adj: ''};
let joke = '';


const words = {
    nouns: ['apple', 'bird', 'TV'],
    verbs: ['run', 'jump', 'swim'],
    adjs: ['quick', 'big', 'pretty'],
    sentences: ['Wow look at that noun !, I was just thinking u r adj because u like to verb',
    'u should go verb because it would make u adj especially after hitting that noun']
}

function selectRandomWord(wordType){
    const allWords = words[wordType + 's'];
    const randIndex = Math.floor(Math.random() * allWords.length);
    const word = allWords[randIndex];

    chosenWords[wordType] = word;
    return word;
    //console.log(word);
}

function constructSentence(chosenWords) {
    let finalSentence = '';
    const allSentences = words['sentences'];
    const randIndex = Math.floor(Math.random() * allSentences.length);
    const sentenceArray = allSentences[randIndex].split(' ');
    //console.log(sentenceArray.join(' '));

    for(wordIndex in sentenceArray){
        const word = sentenceArray[wordIndex];
        if((word+'s') in words){
            finalSentence+=chosenWords[word] + ' ';
        } else {
            finalSentence+=word + ' ';
        }
    }

    joke = finalSentence;
    return finalSentence;
}



selectRandomWord('noun'); // addEventListener()
console.log(chosenWords['noun']); // innerHTML

selectRandomWord('verb');
console.log(chosenWords['verb']);

selectRandomWord('adj');
console.log(chosenWords['adj']);


constructSentence(chosenWords);
console.log(joke);

/*
README doc: Title, Description, Features, How to use, Technologies, Collaborators, License
Find database of non-sensical jokes and words for N/V/A
Support symbols attached to NVAs using regex, %/&/$
*/