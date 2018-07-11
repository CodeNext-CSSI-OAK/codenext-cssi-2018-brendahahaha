// Author: Brenda Buth

console.log("*****************************************");

console.log("This Is The Change Machine");

let readline = require("readline-sync");

let cents = Number(readline.question('Please enter cents as a positive integer'));

let quarters = Math.floor(cents/25);
console.log("quarters: " + quarters);

let remaindersOfQuarters = Math.floor(cents%25);
let dimes = Math.floor(remaindersOfQuarters/10);
console.log("dimes: " + dimes);

let remaindersOfDimes = Math.floor(remaindersOfQuarters%10);
let nickels = Math.floor(remaindersOfDimes/5);
console.log("nickels: " + nickels);

let remaindersOfNickels = Math.floor(remaindersOfDimes%5);
let pennies = Math.floor(remaindersOfNickels/1);
console.log("pennies: " + pennies);

console.log("You're Welcome!");

console.log("*****************************************");
