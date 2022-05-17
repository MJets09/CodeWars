// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries.
//  Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database.
//  It should default to English if the language is not in the database, or in the event of an invalid input.

function greet(language) {

    switch (language) {
        case 'czech':
            return 'Vitejte'
            break;
        case 'danish':
            return 'Velkmst'
            break;
        case 'dutch':
            return 'Welkom'
            break;
        case 'estonian':
            return 'Tere tulemast'
            break;
        case 'finnish':
            return 'Tervetuloa'
            break;
        case 'flemish':
            return 'Welgekomen'
            break;
        case 'french':
            return 'Bienvenue'
            break;
        case 'german':
            return 'Willkommen'
            break;
        case 'irish':
            return 'Failte'
            break;
        case 'italian':
            return 'Benvenuto'
            break;
        case 'latvian':
            return 'Gaidits'
            break;
        case 'lithuanian':
            return 'Laukiamas'
            break;
        case 'polish':
            return 'Witamy'
            break;
        case 'spanish':
            return 'Bienvenido'
            break;
        case 'swedish':
            return 'Valkommen'
            break;
        case 'welsh':
            return 'Croeso'
            break;
        default:
            return 'Welcome'
            break
    }

}

console.log(greet('polish'))

//Best practices
function greet(lang) {
    return langs[lang] || langs['english'];
}

var langs = {
    'english': 'Welcome',
    'czech': 'Vitejte',
    'danish': 'Velkomst',
    'dutch': 'Welkom',
    'estonian': 'Tere tulemast',
    'finnish': 'Tervetuloa',
    'flemish': 'Welgekomen',
    'french': 'Bienvenue',
    'german': 'Willkommen',
    'irish': 'Failte',
    'italian': 'Benvenuto',
    'latvian': 'Gaidits',
    'lithuanian': 'Laukiamas',
    'polish': 'Witamy',
    'spanish': 'Bienvenido',
    'swedish': 'Valkommen',
    'welsh': 'Croeso'
};

//What was the part that you was stuck on?
//No issues, key word that cue me in was the default word.

//What did you learn?
//Going through the instructions and comprehend what is being asked, slowly read and understand what is wanted.
//Go back and understand best practices, still unsure what is going on. Are we returing the objects indexes?


// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr(n, s) {
    let str = ''

    for (let i = 0; i < n; i++) {
        str += s
    }
    return str
}

//Best Practices
function repeatStr(n, s) {
    return s.repeat(n);
}

//What was the part that you was stuck on?
//No issues

//What did you learn?
//Read the instructions clearly, didnt go through the first time because you had parameters mixed up. Learned about the repeat string method.