// The map() method takes in:

// callback - The function called for every array element. Its return values are added to the new array. It takes in:
// currentValue - The current element being passed from the array.
// thisArg (optional) - Value to use as this when executing callback. By default, it is undefined.


// The map() method creates a new array with the results of calling a function for every array element.

let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number
let square = function (number){
    return number * number;
}

//Apply the square function to the numbers

let square_Numbers = numbers.map(square);
console.log(square_Numbers);
