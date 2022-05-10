// // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

function removeChar(str) {
    let firstL = str.substring(1)

    firstL.sl

    return firstL.slice(0, -1)

};

// Best practices

function removeChars(str) {
    return str.slice(1, 3);
}

console.log(removeChars('Giannis'))

//What was the part that you was stuck on?
// Wasnt too hard, knew there were methods to remove first and last characters of strings. Just had to look them up.

//What did you learn?
// slice method can take up to 2 parameters, could of just use that instead of creating a variable for the substring and then slice.