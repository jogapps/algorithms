const threes = (number) => {
    let count = 0;
    let values = [];
    for(let i = 0; i <= number; i++) {
        let threeCount = (`${i}`.match(/3/g) || []).length;
        if(threeCount > 0) {
            count += threeCount; 
            values.push(i);
        }
    }

    return {"count" : count, numbers: values};
}

//console.log(threes(35));