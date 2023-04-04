// qudraticEquation.js the qudratic equation is  ax2 + bx + c = 0,

// a, b and c are real numbers and
// a ≠ 0

// To find the roots of such equation, we use the formula,

// (root1,root2) = (-b ± √b2-4ac)/2

let root1, root2;

let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = prompt("Enter the third number");

// calculate discriminant

let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`the Roots of the qudratic equation are ${root1} and ${root2}`);
}


// condition for real and equal roots
else if (discriminant === 0) {
    root1 = root2 = -b / (2 * a);
    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagePart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    //result
    console.log(`The roots of quadratic equations are ${realPart} + ${imagePart}i and ${realPart} - ${imagePart}i `);
}