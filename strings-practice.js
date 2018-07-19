// function makeAbba(a,b) {
//   return a + b + b + a;
// }
//
// console.log(makeAbba("Hi", "Bye"));

// function comboString(a,b) {
//   if(a.length > b.length) {
//     return b + a + b;
//   }
//   return a + b + a;
// }
//
//
// console.log(comboString("Hi" , "Hello"));

function lastTwo(str) {
  if(str.length === 2) {
    let lastChar = str.charAt(str.length -1);
    let secondLastChar = str.charAt(str.length -2);
    let firstPart = str.substring(0, str.length - 2);
    return firstPart + lastChar + secondLastChar;
  }
  return str;
}
console.log(lastTwo("coding"));

// function foe(param) {
//   console.log(param);
// }
// foe("Anything");
// console.log(param);

let x = 3;
console.log(x);
