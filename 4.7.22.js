let newArr = [3, 5, 2]

function arrSum(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(arrSum(newArr))

//What was the part that you was stuck on?
//Was pretty simple, got stuck on iteration being lesser or equal <=, = messed it up as it returned
//as a NaN, must look into maybe it has to do with length.

//What did you learn?
//When looping through arrays do not use "equal or greater || equal or lesser"