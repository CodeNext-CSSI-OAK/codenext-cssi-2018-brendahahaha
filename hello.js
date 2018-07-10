// Author: Brenda Buth

let readline = require( 'readline-sync');

let answer = readline.question('what is your age');

let ageAsAString = readline.question('what is your age');
let age = Number(ageAsAString);

console.log('In 2028, you will be ' + (age + 10) + 'years old');
