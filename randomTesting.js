
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