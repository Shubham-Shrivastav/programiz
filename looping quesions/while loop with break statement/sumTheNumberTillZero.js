let sum = 0, number;
while (true) {
    number = parseInt(prompt('Enter the number : '));
    if (number <= 0) {
        break;
    }
    sum += number;
}
console.log(`The sum is ${sum}`);