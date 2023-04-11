// The map() method takes in:

// callback - The function called for every array element. Its return values are added to the new array. It takes in:
// currentValue - The current element being passed from the array.
// thisArg (optional) - Value to use as this when executing callback. By default, it is undefined.


// The map() method creates a new array with the results of calling a function for every array element.

// let numbers = [2, 4, 6, 8, 10];

// // function to return the square of a number
// let square = function (number){
//     return number * number;
// }

// //Apply the square function to the numbers

// let square_Numbers = numbers.map(square);
// console.log(square_Numbers);


// map() for object elements in array

const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees

const calculateNetAmount = (obj) => {
    newObj = obj{ };
    newObj.name = obj.name;
    newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    return newObj;
}

let netAmount = employees.map(calculateNetAmount);
console.log(netAmount);