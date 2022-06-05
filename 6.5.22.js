// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
    return str.split(' ').reverse().join(' ')
}

console.log(nameShuffler('Kevin Garnett'))


//Best practices
function nameSuffle(str) {
    return str.split(' ').reverse().join(' ')
}


//What was the part that you was stuck on?
//No trouble, knew split method, reverse and join methods. Knew the tools to use.

//What did you learn?
//It seems to be, when you know what tools to use solving issues is only a matter of knowing what you can do. Hence reading documentation.