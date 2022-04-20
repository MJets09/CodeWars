function sameCase(a, b) {
    if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
        return -1
    } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    } else {
        return 0
    }
}


//What was the part that you was stuck on?
//Had the right idea to use toUpperCase and toLowerCase, had trouble organizing the thought.
//This is where Pseudocode would of really help Meng. REMEMBER TO PSEUDOCODE


//What did you learn?
//Pseudocode is your best friend.