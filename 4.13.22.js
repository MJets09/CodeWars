function sumTwoSmallestNumbers(numbers) {
    let lowestInt = Math.min(...numbers);
    let low = numbers.indexOf(lowestInt);

    while (low > -1) {
        numbers.splice(low, 1);
        low = numbers.indexOf(lowestInt)
    }

    let secondLowest = Math.min(...numbers);;

    return (lowestInt + secondLowest);
}

console.log(sumTwoSmallestNumbers([99, 3, 42, 2, 77]))


//What was the part that you was stuck on?
//How to get the lowest int and taking it out of the array and returning it to add it to the next lowest.

//What did you learn?
//How to get the lowest int and taking it out and adding it to the next lowest int.