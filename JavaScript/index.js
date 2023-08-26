/*
Complete the below set of questions and submit in the classroom:
Write a JavaScript program to display the current day and time in the following format.  
 Today is : Saturday.
Current time is : 10 AM : 30 : 38
Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
Write a JavaScript program to calculate multiplication and division of two numbers using forms(input from the user).  
Write a JavaScript program to get the website URL (loading page).
Write a JavaScript exercise to get the filename extension.

*/
// 1. Write a JavaScript program to display the current day and time in the following format.

var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
console.log(
  "Current Time : " + hour + prepand + " : " + minute + " : " + second
);

// 2.

var random = Math.floor(Math.random() * 10 + 1);
console.log(random);
var guess = prompt("Enter a number between 1 and 10");
if (guess == random) {
  console.log("Good Work");
} else {
  console.log("Not matched");
}

// 3.
function add() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var multiplication = parseInt(num1) * parseInt(num2);
  var division = parseInt(num1) / parseInt(num2);

  document.getElementById("mul_result").innerHTML = multiplication;
  document.getElementById("div_result").innerHTML = division;
}

// 4.
console.log(document.URL);

// 5.
var filename = prompt("Enter a filename with extension : ");
var ext = filename.split(".").pop();
console.log(ext);
