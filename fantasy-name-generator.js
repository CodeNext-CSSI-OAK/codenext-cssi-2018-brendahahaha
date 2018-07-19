// Author: Brenda Buth
let readline = require("readline-sync");

// global variables
let firstName;
let lastName;
let momMaidenName;
let cityBorn;
let favoriteColor;
let street;
let fantasyName;

/******************************************************************************
                                  getNewFirstName()
  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName() {
  return firstName.substring(0,3) + lastName.substring(0,2).toLowerCase();
}

/******************************************************************************
                                  getNewLastName()
  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName() {
  return momMaidenName.substring(0,1) + cityBorn.substring(0,2).toLowerCase();
}

/******************************************************************************
                                  getTitle()
  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle() {
  return lastName.charAt(1) +  lastName.charAt(2) +  lastName.charAt(3) + favoriteColor;

}

/******************************************************************************
                                  getHonorific()
  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific() {
  return getTitle() + street;

}

/******************************************************************************
                                     run()
  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {
  console.log("--------------------------------------------------------------");
  console.log("Fantasy Name Generator");
  console.log("--------------------------------------------------------------");
  firstName = readline.question("What is your first name: ");
  lastName = readline.question("What is your last name: ");
  momMaidenName = readline.question("What is your mom's maiden name: ");
  cityBorn = readline.question("The city you were born: ");
  favoriteColor = readline.question("Your favorite color: ");
  street = readline.question("The name of the street you live on: ");
  console.log("Thank you for answering every question! Please wait one moment.");
  console.log("CALCULATING, PLEASE WAIT...");
  console.log("**************************************************************");
  console.log(getNewFirstName() + " " + getNewLastName() + ", " + getTitle() + " of " + getHonorific());
  console.log("**************************************************************");
}

// Run the program!
run();
