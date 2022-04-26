// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. 
// At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers.
//Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

//Solution


function stringClean(s) {
    return s.replace(/\d/g, "");
}

console.log(stringClean("so0 what ma8te"))

//No regex
function stringClean(s) {
    var array = s.split("").map((char) => {
        if (!parseInt(char) && char !== "0") {
            return char
        }
    })
    return array.join("")
}

//What was the part that you was stuck on?
//Had no idea where to start, google'd how to remove numbers out of strings but could only find the replace method wasnt much help. Unlocked solution after 20mins of googles



//What did you learn?
//Using the replace method, but had to learn about regex. If you need to return an updated array use map method.