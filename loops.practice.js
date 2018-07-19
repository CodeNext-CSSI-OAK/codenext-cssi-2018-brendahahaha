let readline = require("readline-sync");


let count = 5;
while(count > 0) {
  console.log("Hello!");
  count--;
}


let str = "ABCDE";
for(let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}





let correctPassword = "badabing";
let input = " ";
let attempts = 3;
while(input !== correctPassword && attempt > 0) {
  input = readline.question("please enter the correct password: ");
  attempt--;
}
if(attempts === 0) {
  console.log("gtfo");
} else {
  console.log("ok");
}

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i = 0; 1 < alphabet.length; i++) {
  console.log(alphabet.charAt(i));
}

for(let count = 0; count <= 30; count++) {
  console.log(count);
}

let students = "MFAD";
for(let i = 0; i < students.length; i++) {
  console.log("Give " + students.charAt(i) + " a cookie.");
}

function containsSpace(str) {
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === " ") {
      return true;
    }
  }
  return false;
}

console.log(containsSpace("star wars"));
console.log(containsSpace("star wars"));
console.log(containsSpace("     "));
console.log(containsSpace(""));



function countAs(str) {
let count = 0;
for(let i = 0; i < str.length; i++) {
  if(str.charAt(i) === "a" ||str.charAt(i) === "A") {
    count++;
    }
  }
  return count;
}

console.log(countAs("happy"));
console.log(countAs("lady gaga"));
console.log(countAs(" "));



function reverseString(str) {
  let reversed = " ";
  for(let i = str.length -1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

console.log(reverseString("eevee"));
console.log(reverseString("racecar"));
console.log(reverseString("banana"));
