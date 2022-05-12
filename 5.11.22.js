// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
            break;
        case '-':
            return value1 - value2;
            break;
        case '*':
            return value1 * value2;
            break;
        case '/':
            return value1 / value2;
            break;
        default:
            return 0;
    }
}

console.log(basicOp('+', 5, 5))

//What was the part that you was stuck on?
// Wasnt too hard, thought process was to create an if statement but switch was the better case to use.


//What did you learn?
// Dont forget to add the default case.