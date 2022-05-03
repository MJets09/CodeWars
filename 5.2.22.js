// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//     let y = s.split('').map((x) => x + x).join('')
//     console.log(y)

//     for (let i = 0; i < y.length; i++) {
//         return y.charAt(0).toUpperCase() + y.slice(1);
//     }
// }

console.log(accum('abdddd'))

//Best practices
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('');
    //Have to figure out where the I comes from in repeat and how it works.

    // How does the value of is incremented?

    // i is auto-incremented in the map function's callback.
    // i is the index of the item in the array careted from the split

}


//What was the part that you was stuck on?
//Was unable to solve. Was able to break string up and repeat the letters and captialize 
//first letter but was unable to figure out to capitalize the first letter of each character.

//What did you learn?
//There is a repeat method, and join characters together with -