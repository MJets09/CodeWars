// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

function replaceDots(str) {
    return str.split('.').join('-')
  }


  //Best Practices
  var replaceDots = function(str) {
    return str.replace(/\./g,'-');
  }

//What was the part that you was stuck on?
//Knew about the replace method, had to look up documentation. Had an issue though, when using replace('.','-');
//Looks like it only worked on the first character? Maybe a loop? Decided to use split and join methods.

//What did you learn?
//Replace does not replace all of the characters only the first known character. Need to try a loop?
//Unsure of best practices, looks to be using regex. I was told to not learn regex yet.