const palindrome = (word) => {
    if(word.length % 2 === 0) return "No";
    let leftWord = [];
    let rightWord = [];
    // read from middle of word bothways and compare
    let midPoint = parseInt(word.length / 2) + 1;
    for(let i = 0; i <= midPoint - 1; i++) {
        leftWord.push(word[i]);
    }
    for(let j = word.length - 1; j >= midPoint -1 ; j--) {
        rightWord.push(word[j]);
    }
    if(rightWord.toString() === leftWord.toString()) return "Yes";
    else return "No";

}

//console.log(palindrome("madamjk"));