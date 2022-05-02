// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
    // your code here
    if (haystack.includes('needle')) {
        let x = haystack.indexOf('needle')
        return `found the needle at position ${x}`
    }
}


console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

//Best practices
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

//What was the part that you was stuck on?
//Breaking down the vocab to understand what to do, other than that was fairly easy.

//What did you learn?
//Do your googles. Searched how to find an element's index in an array.