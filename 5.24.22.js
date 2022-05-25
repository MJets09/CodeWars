// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
//  If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
//  If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {

    if (x.includes('good'))

        return 'Publish!'

    else if (x.includes('bad')) {
        return 'Fail'
    }

}

//Best practices
const wells = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' :
        good_count < 3 ? 'Publish!' : 'I smell a series!';
}

console.log(wells(['good', 'bad', 'good', 'good']))

//What was the part that you was stuck on?
//Couldnt figure out a way to check if the string had more than two of the same words, didnt know what to google.
//Solution unlocked

//What did you learn?
//Of course the filter method was the one to use, has if it doesnt pass the test it will auto fail.
//Next next I would need to google array methods to see if they have any methods I am looking for.