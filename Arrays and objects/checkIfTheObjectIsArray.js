// Program to check if the object is an array or not.

function checkObject(arr) {
    // check if the arr is an array
    const result = Array.isArray(arr);

if (result) {
    console.log(`${arr} is an Array`);
}
else { 
    console.log(`${arr} is not an Array`);
}
}

const array = [1, 2, 3];

// call the function
checkObject(array);

//  yet to understand this code properly...