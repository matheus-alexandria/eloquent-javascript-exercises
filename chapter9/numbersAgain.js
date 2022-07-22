const tests = [
  '50',
  '40.20',
  '.8',
  '+9',
  '-145',
  '1e-3',
  '2E10',
  '.'
]

tests.forEach((test) => {
  if(test.match(/[+-]?\d*(([eE]-?)|(\b.|.\b))?\d*/)[0].length === 0) {
    console.log(test);
    throw new Error(`had no match`);
  }
});

console.log('.'.match(/[+-]?\d*(([eE]-?)|(\b.|.\b))?\d*/));