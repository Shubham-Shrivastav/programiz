// program to shuffle the deck of cards

// declare the cards elements

const suits = ['Spades', 'Diamonds', 'Club', 'Hearts'];
const values = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
];

// An empty array to contain cards
let deck = [];

// creating the deck of cards

for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suite: suits[i] };
        deck.push(card);
    }
}
// console.log(deck);

// Shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
    //Or deck[i],deck[j] = deck[j], deck[i];
}
console.log('The first five cards are : ');
//for displaying 5 results.
for (let i = 0; i < 5; i++){
    console.log(`${deck[i].Value} of ${deck[i].Suite}`);
}