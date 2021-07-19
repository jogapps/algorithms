const isprimeNumber = (value) => {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) return false;
    }
    return true;
}

//isprimeNumber(14);