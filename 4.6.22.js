function spEng(sentence) {
    if (sentence.search('english')) {
        return false
    } else {
        return true
    }
}

function spEng(sentence) {
    let sentenceLower = sentence.toLowerCase();
    return sentenceLower.includes('english');
}

//What was the part that you was stuck on?
//Was able to complete with search method. Better way imo is to use the includes method.

//What did you learn?
//Learnt the includes method.


//string.includes(searchvalue, start)
//The includes() method returns true if a string contains a specified string.
//Otherwise it returns false.
//The includes() method is case sensitive.