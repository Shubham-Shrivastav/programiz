// program that checks if the number is positive, negative or zero

const number = parseInt(prompt("Enter the number : "));

// check if the number is greater then zero
if (number > 0) {
    console.log(`${number} is Positive`);
}
else if (number === 0) {
    console.log(` ${number} The number is Zero`);
}
else if (number < 0) {
    console.log(`${number} is Negative`);
}
else {
    console.log("Please enter a valid Number");
}