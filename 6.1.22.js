// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
//  I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {

    let sum1 = arr1.reduce((a, b) => a + b)
    let sum2 = arr2.reduce((a, b) => a + b)

    return sum1 + sum2
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

//What was the part that you was stuck on?
// No issues, knew reduce method can obtain sum of arrays

//What did you learn?
//Good to go, you should review the past two codes. You had a lot of trouble on those.