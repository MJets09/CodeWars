// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


function check(a, x) {
    return a.includes(x) ? true:false
  }

  //Best Practices
  const check = (a,x) => a.includes(x);

  //What was the part that you was stuck on?
// No issues, knew about the includes method to search for strings.

//What did you learn?
//More use of the ternary operator