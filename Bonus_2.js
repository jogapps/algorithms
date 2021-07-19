let consonantReplace = (word) => {
    let consonants = "bcdfghjklmnpqrstvwxyz";
    let newWord = "";
    for(let i = 0; i < word.length; i++) {
        if(consonants.includes(word[i])) {
            // get (index of word at consonant) + 1
            newWord += consonants[consonants.indexOf(word[i]) + 1] 
        } else {
            newWord += word[i];
        }
    }

    return newWord;
}

//console.log(consonantReplace("hello world"));