const sumInArray = (values, val) => {
    for(let i = 0; i < values.length - 2; i++) {
        if((values[i] + values[i+1] + values[i+2]) === val) return [values[i], values[i+1],values[i+2]];
    }
    return -1;
}

//console.log(sumInArray([1, 2, 3, 4, 5, 6], 12));
