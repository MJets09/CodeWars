// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(arr) {

    let sum = arr.reduce((acc, c) => acc * c)

    return sum
}

console.log((grow([1, 2, 3]), 6))

//What was the part that you was stuck on?
//Fairly simple, gotten used tot he reduce method, which key word is sum

//What did you learn?
//keyword of using the reduce method is looking for a sum, or a total amount


//Second codeWars

// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given[34, 15, 88, 2] your solution will
// return 2
// Given[34, -345, -1, 100] your solution will
// return -345
// You can assume,
// for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args.reduce((acc, c) => Math.min(acc, c))

        return min
    }
}

//What was the part that you was stuck on?
//Fairly simple, googled how to find the smallest element in an array

//What did you learn?
//Learnt about the Math.Min method, placed in Anki to rememeber.