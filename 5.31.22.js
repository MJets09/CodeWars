// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};

//What was the part that you was stuck on?
// Figure it was the opposite of the usual loop. Couldnt get it to past, needed to pass results into an Array. Push method required.

//What did you learn?
//You still need to read cleary on the directions, slow down and break down code.