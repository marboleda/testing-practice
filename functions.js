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

export { capitalizeString, reverseString }