const highestOccurrence = (word) => {
    let occurrence = {};
    for(let i = 0; i < word.length; i++) {
        if(!occurrence[word[i]]) {
            occurrence[word[i]] = 1;
        } else {
            occurrence[word[i]]++
        }
    }

    // get highest occurrence

    let sorted = Object.entries(occurrence)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    const findHighest = obj => {
        const values = Object.values(obj);
        const max = Math.max.apply(Math, values);
        for(key in obj){
           if(obj[key] === max){
              return {
                 [key]: max
              };
           };
        };
     };
     return findHighest(sorted);
}

console.log(highestOccurrence("afhuusnimr443o0sggg"));