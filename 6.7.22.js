// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//What was the part that you was stuck on?
//Understood the logic needed to do, as I needed to split the string up and filter or mapped the elements based on if they are bigger than 5 or less,
//then return a new array with new string.

//What did you learn?
//Forgot about the map method. Need to read more into array methods.


function binA(x){
    return  x.split('').map(x => x < 5 ? 0:1).join('')
}