// This methods sorts the items of an array in a specific order (ascending or descending).


// NOTE : Returns the array after sorting the elements of the array in place (meaning that it changes the original array and no copy is made).


// let arr = ['a', 'c', ' ','v', 'f', 'd', 'e', 'z', 'x', 'b', 'n', 'i'];
// let sortedArr = arr.sort();

// console.log(sortedArr);


// Sorting using Custom Function
// To sort the above names array such that the longest name comes last, rather than sorting it alphabetically

// custom sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];
let nameLength = function (a, b) { 
   return a.length - b.length;
};

names.sort(nameLength);
console.log(names)