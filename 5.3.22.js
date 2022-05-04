// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level 's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater(+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers,
// return a fixed list so that the values increment by 1
// for each index from the minimum value up to the maximum value(both included).

// Example
// Input: 1, 3, 5, 6, 7, 8 Output: 1, 2, 3, 4, 5, 6, 7, 8

// function pipeFix(numbers) {

//     for (let i = 0; i < numbers.length)

//         return numbers.map(x => x + 1)

// }

//Best practices
function pipeFix(numbers) {
    var first = numbers[0];
    var last = numbers[numbers.length - 1];

    var arr = [];
    for (var i = first; i <= last; i++) {
        arr.push(i);
    }
    return arr;
}


console.log(pipeFix([4, 9, 16, 25]))

//What was the part that you was stuck on?
//Figuring out how to increment from the previous number. Tried forEach and Map was able
//to increment by one but couldnt figure out how to fill the missing pieces.

//What did you learn?
//Create a variable with the first index of the array and a variable with the last index
//of the array. Then use the first index variable to loop as the initiator and the
//last index variable as the limit and push into a new array. Remember how we can do map()
//is to create an array and push.