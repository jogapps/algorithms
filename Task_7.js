const standardDeviation = (values) => {
    let average = values.reduce((num1, num2) => num1 + num2) / values.length;
    return Math.sqrt(values.map(x => Math.pow(x - average, 2)).reduce((num1, num2) => num1 + num2) / values.length);
}

console.log(standardDeviation([2,3,4,7,9, 1]));
