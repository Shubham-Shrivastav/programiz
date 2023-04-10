const arr1 = ['eat', 'sleep', 'code'];
const arr2 = new Array('eat', 'sleep');
const myList = [];


// array of numbers.
const numArray = [1, 2, 3, 4, 5, 6, 5, 4];

//array of strings
const stringArray = ['eat', 'work', 'sleep'];

// Array with mixed dataTypes

const newData = ['work', 'exercise', 1, true];

// we can also arrays, function and other objects inside an array. For example,

const newData1 = [
    { 'task1': 'exercise' },
    [1, 2, 3],
    function hello() { console.log('hello') }
];

// we can access of an array using indices (0,1,2,3,....). for example,

const myArray = ['h', 'e', 'l', 'l', 'o'];
//first element
console.log(myArray[3]);

//second element
console.log(myArray[1]);
myArray.push(['dailyTasks', 'exercise', 'eat', 'sleep', 'work']);
myArray.unshift('hello');
console.log(myArray);

// removing the first element of an array using in-build shift method.

myArray.shift();
console.log(myArray);

// Remove an Element from an Array

let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']

// using shift method
let dailyActivities = ['work', 'eat', 'sleep'];

// remove the first element
dailyActivities.shift();

console.log(dailyActivities); // ['eat', 'sleep']

// Array length
const dailyActivities = ['eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities.length); // 2

/*
Array Methods
In JavaScript, there are various array methods available that makes it easier to perform useful calculations.

Some of the commonly used JavaScript array methods are:

Method	Description
concat()	joins two or more arrays and returns a result
indexOf()	searches an element of an array and returns its position
find()	returns the first value of an array element that passes a test
findIndex()	returns the first index of an array element that passes a test
forEach()	calls a function for each element
includes()	checks if an array contains a specified element
push()	aads a new element to the end of an array and returns the new length of an array
unshift()	adds a new element to the beginning of an array and returns the new length of an array
pop()	removes the last element of an array and returns the removed element
shift()	removes the first element of an array and returns the removed element
sort()	sorts the elements alphabetically in strings and in ascending order
slice()	selects the part of an array and returns the new array
splice()	removes or replaces existing elements and/or adds new elements
*/


/*make an array 
mulitply each number of an arry by 3.
add 1 to all odd number
add all the numbers of the array 
*/

let arr2 = [1, 2, 3, 4, 5];
arr2.map((e) => {
return e * 3;
});

// add 1 to all odd number
arr2.map((e) => {
    if (e % 2 === 1)
        return e + 1;
    else
        return e;
});

//add all the numbers of the array 

arr2.reduce((a, b) =>{
    return a + b;
});

// Make program that discards every other item in array
// inp -> [1,4,2,9,7,5]
// out -> [4,9,5]

const arr5 = [1, 4, 2, 9, 7, 5];
arr5.map((e) => {
let i = arr5.pop(arr/2);
});
console.log(i);