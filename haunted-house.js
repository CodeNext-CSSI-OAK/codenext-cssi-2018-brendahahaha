// Author: Brenda Buth
var readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Brenda Buth");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
var enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  console.log("You see a ghost.");
  let confrontGhost = readline.question("Will you confront the ghost?");
  if(confrontGhost == "y" || confrontGhost == "yes") {
    console.log("The ghost wants to be your friend.");
    let friendGhost = readline.question("Will you two be friends?");
    if(friendGhost == "y" || friendGhost == "yes") {
      console.log("You two become friends!");
      console.log("The ghost asks you to follow it.");
      let followGhost = readline.question("Will you follow ghost?");
      if(followGhost == "y" || followGhost =="yes") {
        console.log("Ghost takes you to 7/11.");
        console.log("Ghost wants to buy you something to eat.");
        let ghostBuy = readline.question("Will you accept his offer?");
        if(ghostBuy == "y" || ghostBuy == "yes") {
          console.log("Ghost chokes on air");
        }
      }
    }

  } else {
    console.log("You leave to go back home.");
  }
} else {
  console.log("You went back home.");

}
console.log("Thanks for playing!");
