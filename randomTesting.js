
// Testing the Closure aspect of JavaScript
const { randomInt } = require("crypto");

function getShowCard() {
  const suits = ['spades', 'clubs', 'hearts', 'diamonds'];
  const n = randomInt(12);
  const s = randomInt(4);

  const card = `${n + 1} of ${suits[s]}`;

  return () => console.log(card);
}

const card = getShowCard();
const card2 = getShowCard();
const card3 = getShowCard();

// card();
// card2();
// card3();

const { name, age } = {
  name: 'Matheus',
  age: 24,
  food: 'Meat'
}
console.log(name, age); // Matheus 24

const [one, two] = [1, 2, 3, 4, 5];

console.log(one, two); 
// 1 2 (pegando em sequência do array)

console.log('Reduce');
const array = [1, 5, 6, 2, 9, 4];
console.log(array.reduce((prev, cur) => {
  return prev > cur ? prev : cur;
}));


console.log('UTF-16');
const emoji = '😃😃';
console.log(emoji.codePointAt(0)); // 128515 -- Full Unicode Character
console.log(emoji.codePointAt(1)); // 56835
console.log(emoji.codePointAt(2)); // 128515


console.log('FindIndex');

const array2 = [1, 5, 6, 2, 9, 4];
console.log(array2.findIndex(e => e > 7)); // 4
console.log(array2[array2.findIndex(e => e > 7)]) // 9