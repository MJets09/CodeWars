function summation(x) {
    let z = 0;

    for (i = 1; i <= x; i++) {
        z += i
    }
    return z;
}

console.log(summation(5))