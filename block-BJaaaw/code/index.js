// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number1 = +prompt(`enter a number`);
if (number1 % 2 === 0) {
  console.log(`even number `)
} else {
  console.log(`odd number`)
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = +prompt(`enter a number`);
let numB = +prompt(`enter a number`);
if (numA > numB) {
  alert(`maximum number ${numA}`)
} else {
  alert(`minimum number`)
}

// 3. Convert the above code using`?` terniary operator
let number1 = +prompt(`enter a  number`);
let number2 = +prompt(`enter a number`);
console.log(number1 > number2) ? "maximum" : "minimum";

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt(`what is your house name`);
if (houseName === `stark`) {
  console.log(`Winter is coming`);
} else if (houseName === `Lannister`) {
  console.log(`A lannister always pays his debt`);
} else {
  console.log(`All men must die`);
}
// 5. Convert the above code using`?` terniary operator
let houseName = prompt(`what is your house name`);
console.log(houseName === `stark` ? `Winter is coming` : houseName === `Lannister` ? `A lannister always pays his debt`: `All men must die`)
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = +prompt(`enter a number`);
switch (month) {
  case 1:
    console.log(31);
    break;
  case 2:
    console.log(28);
    break;
  case 3:
    console.log(31);
    break;
  case 4:
    console.log(30);
    break;
  case 5:
    console.log(31);
    break;
   case 6:
    console.log(30);
    break;
  case 7:
    console.log(31);
    break;
  case 8:
    console.log(31);
    break;
  case 9:
    console.log(30);
    break;
  case 10:
    console.log(31);
    break;
   case 11:
    console.log(30);
    break;
  case 12:
    console.log(31);
    break;
  default:
    console.log(`invalid month`);
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = +prompt(`enter salary amount`);
if (salary <= 20000) {
  alert(`in-hand amount ${salary - (salary * 10) / 100}`);
} else if (salary <= 40000) {
  alert(`in-hand amount ${salary - (salary * 20) / 100}`);
} else if (salary > 50000) {
  alert(`in-hand amount ${salary - (salary * 30) / 100}`);
} else {
  alert(`the amount of salary`);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let mark = +prompt(`enter a number`)
if (mark > 100) {
  alert(`mark can not be greater than 100`)
} else if(mark>80 && mark<100){
  alert(`Grade A`)
} else if (mark > 50 && mark < 80) {
  alert(`Grade B`)
} else if (mark > 30 && mark < 50) {
  alert(`Grade C`)
} else (mark > 0){
  alert(`Grade D`)
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt(`enter weather information`)
if (weather === `sunny`) {
  alert(`Wear a t shirts`);
} else if (weather === `rainy`) {
  alert(`Don't forget to take your raincoat`);
} else if (weather === `hot`) {
  alert(`get a hanky`)
} else if (weather === `freezing`) {
  alert(`get your sweater on`)
} else {
  alert(`not a valid input`)
}