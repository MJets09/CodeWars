// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    var words = s.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
}

console.log(findShort('These words are from my own.'))


// Best practices
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }


//What was the part that you was stuck on?
// Had to unlock solution, did not know where to start, was thinking a loop?


//What did you learn?
//Best practices says to use Math.min and use apply method, 
//need to look into and break code more.