// swap two variables.
// let a = 2;
// let b = 3;

// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a, b);



// Using es6(ES2015) Destructuring assignment and also taking the inputs from the user.

// let a = prompt('enter the first digit:');
// let b = prompt("enter the second digit: ");

// [a, b] = [b, a];
// console.log(`the values after swapping  ${a} and ${b}`);


// Using Arithmetic Operators . This method only uses the two variables and swaps the value of the variables using arithmetic operators

// let a = prompt('enter the first element : ');
// let b = prompt('enter the second element : ');

// a = a + b;
// b = a - b;
// a = b - a;

// console.log(a, b);
//use arithmetic operators (+, -) if both variables are of number type.

// Using Bitwise XOR operator
//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

// XOR operator
a = a ^ b
b = a ^ b
a = a ^ b

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// Note: You can use this method for only integer (whole number) values.


