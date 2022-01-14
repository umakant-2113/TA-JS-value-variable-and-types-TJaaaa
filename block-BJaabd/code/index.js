// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = +prompt(`enter the age`);
if (12 <= age >= 55) {
  console.log(`you can participate in the marathon`);
} else if (4 <= age >= 11) {
  console.log(`you are too young to participate in the marathon `);
} else if (age < 4) {
  console.log(`hey kiddo can you walk`);
} else if (age > 55) {
  console.log(`you are too old to participate in the marathon`);
} else {
  console.log(`invalid value`);
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.


Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

if (n === 1) {
  alert(`hello`);
} else {
  for (let i = 1; i <= n && n <= 7; i++)
    if (i === e) {
      console.log(`h${"e".repeat(i)}llo`);
    }
}

let v = "";
let n = +prompt(`enter a number`);

if (n === 1) {
  alert(`hello`);
} else {
  for (let i = 1; i <= n && n <= 7; i++) {
    v = v + "e";
    console.log(`h${v}llo`);
  }
}

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let naturalNumber = +prompt(`enter a number`);

let total = naturalNumber;
let s = (total * (total + 1)) / 2;
alert(s);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let number = 2;
switch (number) {
  case 1:
    alert(`number is equal to 1`);
    break;
  case 2:
    alert(`number is equal to 2`);
    break;
  case 3:
    alert(`number is equal to 3`);
    break;
  case 4:
    alert(`number is equal to 4`);
    break;
  case 5:
    alert(`number is equal to 5`);
    break;
  case 6:
    alert(`number is equal to 6`);
    break;
  case 7:
    alert(`number is equal to 7`);
    break;
  case 8:
    alert(`number is equal to 8`);
    break;
  case 9:
    alert(`number is equal to 9`);
    break;
  default:
    alert(`enter valid number`);
}
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marks = +prompt(`enter the grade value `);
switch (true) {
  case marks > 90:
    alert(`your grade is AA`);
    break;
  case 80 < marks && 90 >= marks:
    alert(`marks is greater then 80 and less than or equal to 90`);
    break;
  case 70 < marks && 80 >= marks:
    alert(`marks is greater than 70 and less than or equal to 80`);
    break;
  case 60 < marks && 70 >= marks:
    alert(`marks is greater than 60 and less than or equal to 70`);
    break;
  case 50 < marks && 60 >= marks:
    alert(`marks is greater than 50 and less than or equal to 60`);
    break;
  case 40 < marks && 50 >= marks:
    alert(`marks is greater than 40 and less than or equal to 50`);
    break;
  case 30 < marks && 40 >= marks:
    alert(`marks is greater than 30 and less than or equal to 40`);
    break;
  case marks < 30:
    alert(`marks is less than 30`);
    break;
  default:
    alert(`invalid value`);
}
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let numA = +prompt(`enter first number `);
let numB = +prompt(`enter second number`);
if (numA > numB) {
  alert(`large number is ${numA}`);
} else {
  alert(`larger number is ${numB}`);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let numA = +prompt(`enter first number`);
let numB = +prompt(`enter second  number`);
let numC = +prompt(`enter third number`);
let product = numA * numB * numC;
alert(`${product}`);

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).


  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let numA = +prompt(`enter a number`);
let numB = +prompt(`enter a number`);
let operation = prompt(`enter  a operation`);
if (operation === "Add") {
  alert(numA + numB);
} else if (operation === "Sub") {
  if (numA > numB) {
    alert(numA - numB);
  } else {
    alert(` numA is larger than numB`);
  }
} else if (operation === "mul") {
  alert(numA * numB);
} else if (operation === "div") {
  if (numA > numB) {
    alert(numA / numB);
  } else {
    alert(` numA is larger than numB`);
  }
} else {
  alert(`enter a valid input`);
}
