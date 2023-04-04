// The area of triangle can be found by two methods.
/* It has done by  two types of formulas
1. area = (base * height) / 2
2. s = (a+b+c)/2
area = √(s(s-a)*(s-b)*(s-c))*/

const a = parseFloat(prompt('Enter 1st side of triangle'));
const b = parseFloat(prompt('Enter 2nd side of triangle'));
const c = parseFloat(prompt('Enter 3rd side of triangle'));

// calculate the semi-perimeter
const s = (a + b + c) / 2;

console.log("The semi-perimeter is" + s);

const area = Math.sqrt(
    s * (s - a) * (s - b) * (s - c)
);

console.log(`Area of triangle is ${area}`);