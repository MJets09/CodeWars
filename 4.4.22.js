function sumMul(n, m) {
    let sum = 0;

    if (n >= m) {
        return "INVALID"
    }
    for (i = n; i < m; i += n) {
        console.log(i)
        sum += i;
    }
    return sum
}

console.log(sumMul(2, 9))


//What was the part that you was stuck on?
//Understanding how to change the increment value

//What did you learn?
//How to change the increment value, learn to add the 1st parameter to the addition assigment