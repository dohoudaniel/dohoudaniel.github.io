let x = 5;
let y = 7;

let answer = x + y;

console.log(answer);
// Prints the value of answer to the console

function sayHi() {
  let userName = $("#username").val();
  // This line of code allows us to store whatever the user types in
  // in the box after Name into the variable 'userName'. This was achieved
  // using the val() method.

  console.log(userName);
}

$("#pressMe").click(sayHi);
// This line of code works directly with the 'Beautiful Heart ❣💖' button.
// Once the button is clicked, it takes in the value of userName and prints
// it to the console.
