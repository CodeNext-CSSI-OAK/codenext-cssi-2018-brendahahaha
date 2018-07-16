function subtract(num1, num2) {
  console.log(num1 - num2);

  return num1 - num2;

}
let result = subtract(6,4);

console.log("The result is:" + result);








function absoluteDifference(num1, num2) {
  if (num2 > num1) {
    return num2 - num1;
  }
  return num1 - num2;
}

console.log(absoluteDifference(6,4));
console.log(absoluteDifference(4,6));
