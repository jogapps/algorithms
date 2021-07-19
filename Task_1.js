const evenOddAdd = (arr) => {
    let evenArray = [];
    let oddArray = [];
    // get odd and even numbers
    for (let i =0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) evenArray.push(arr[i])
        else oddArray.push(arr[i]); 
    }

    let evenSum = 0;
    let oddSum = 0;
    // sum even array
    for(let j = 0; j < evenArray.length; j++) {
        evenSum += evenArray[j];
    }

    // sum odd array
    for(let k = 0; k < oddArray.length; k++) {
        oddSum += oddArray[k];
    }

    return [evenSum, oddSum];
}



//evenOddAdd([1, 5, 6, 2, 0, 4, 6, 8]);