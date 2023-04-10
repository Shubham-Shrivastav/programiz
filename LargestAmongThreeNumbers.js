// This program is to fin the largest number among three numbers

const a = prompt('Enter the first number : ');
const b = prompt('Enter the second number : ');
const c = prompt('Enter the third number : ');

if (a >= b && a >= c) {
    console.log('first is largest');
}

else if (b >= a && b >= c) {
    console.log('second is largest');
}
else {
    console.log('third is largest');
}