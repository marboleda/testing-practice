const capitalizeString = (input) => {
    return input[0].toUpperCase() + input.slice(1);
}

const reverseString = (input) => {
    let newString = '';
    for (let i = 1; i <= input.length; i++) {
        newString += input[input.length-i];
    }
    return newString;
}

const calculator = {
    add: (a,b) => { return a+b },
    subtract: (a,b) => { return a-b },
    divide: (a, b) => { return a/b },
    multiply: (a, b) => { return a*b }

}

export { capitalizeString, reverseString, calculator }