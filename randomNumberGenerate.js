// Math.floor(Math.random() * (max - min + 1)) + min

// input from user

const min = parseInt(prompt("Enter the lowest Number : "));
const max = parseInt(prompt("Enter the highest Number : "));

// generating the Random number

const random = Math.floor(Math.random() * (max - min + 1)) + min;
// display the random number

console.log(`Random value between ${min} and ${max} is : ${random}`);