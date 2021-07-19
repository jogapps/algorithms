const isPrime = (val) => {
    for(let j = 2; j < val; j++) {
        if(val % j === 0) return false;
    }
    return true;
}
const primeArray = (array) => {

    let primes = [];
    for(let i = 0; i < array.length; i++) {
        if(isPrime(array[i])) primes.push(array[i]);
    }
    return primes;
}

//console.log(primeArray([7, 5, 13, 56, 57, 91, 83]));