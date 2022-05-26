// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, 
// saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all


// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

arr = [4, 5, 4, 5, 6, 6]


function howMuchILoveYou(nbPetals) {

    if (nbPetals.length == 1) {
        return 'I love you'
    } else if (nbPetals.length == 2) {
        return 'a little'
    } else if (nbPetals.length == 3) {
        return 'a lot'
    } else if (nbPetals.length == 4) {
        return 'passionately'
    } else if (nbPetals.length == 5) {
        return 'madly'
    } else if (nbPetals.length == 6) {
        return 'not at all'
    } else {
        return 'I love you'
    }
}



console.log(howMuchILoveYou(arr))

//Best practices
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
    return phrases[(n - 1) % phrases.length]
}

//What was the part that you was stuck on?
// Midly confusing, thought of switch cases and if/else statements, was able to run through my own console but never passed
// the problem on Codewars. Had to unlock solutions.


//What did you learn?
//Do not understand the solution, will comeback and break down solution.