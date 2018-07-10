// Author: Brenda Buth

console.log("Welcome to Super Easter Predictor!");

let readline = require("readline-sync");

let y = Number(readline.question('Please enter a year greater than 1582'));

let a = y % 19;
//console.log("The value of a is " + a);

let b = Math.floor(y/100);
//console.log("b is " + b);

let c = (y%100);
//console.log("c is " + c);

let d = Math.floor(b/4);
//console.log("d is " + d);

let e = b%4;
//console.log("e is " + e);

let f = Math.floor((b+8)/25);
//console.log("f is " + f);

let g = Math.floor((b-f+1)/3);
//console.log("g is " + g);

let h = ((19 * a + b - d - g + 15) % 30);
//console.log("h is " + h);

let i = Math.floor(c/4);
//console.log("i is " + i);

let k = c%4;
//console.log("k is " + k);

let r = ((32 + 2 * e + 2 * i - h - k) % 7);
//console.log("r is " + r);

let m = Math.floor((a + 11 * h + 22 * r) / 451);
//console.log("m is " + m);

let n = Math.floor((h + r - 7 * m + 114) / 31);
//console.log("n is " + n);

let p = ((h + r - 7 * m + 114) % 31);
//console.log("p is " + (p + (1)));

console.log("In "+y+", Easter falls on "+n+", "+(p+1)+ "");
console.log("Goodbye!");
