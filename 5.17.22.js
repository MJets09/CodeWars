// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function find_average(array) {
    if (array == null || array.length == 0) {
        return 0
    } else {
        return array.reduce((a, b) => a + b, 0) / array.length
    }
}


// Best pracitices
var find_average = (array) => {
    return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length
}


//What was the part that you was stuck on?
// No issues, knew how to find the average of numbers and understood needed to find a way to add up numbners which was the reduce method and divide.


//What did you learn?
//Returning an empty array is not array == null but array.length == 0