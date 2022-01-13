//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

// Using `console.log` log all the evan values from 1 to 10.

// Using `console.log` log all the od values from 1 to 10.

// Calculate the sum of all numbers from 1 to 10.

// Log all the values from 1 to 10 using while loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
let total = 0;
let num = 10;
for (i = 1; i <= 10; i++) {
  total = total + i;
}
console.log(total);
 
let i = 1;
while (i < 10) {
  console.log(i);
  i++;
}
 