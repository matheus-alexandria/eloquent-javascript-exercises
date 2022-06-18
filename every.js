// Create two version of the every function, one with a loop and one with the built in some method
function every(arr, test) {
  for(e of arr) {
    if(!test(e)) {
      return false;
    }
  }

  return true;
}

function everySome(arr, test) {
  if(!arr.some(test)) {
    return false;
  }

  return true;
}


console.log(every(['Cloak', 'Shirt'], (e) => typeof e === 'string'));
console.log(every(['Cloak', 'Shirt', 20], (e) => typeof e === 'string'));

console.log(everySome(['Cloak', 'Shirt'], (e) => typeof e === 'string'));
console.log(everySome(['Cloak', 'Shirt', 20], (e) => typeof e === 'string'));

// console.log('Logic');
// const a = 'a';
// const b = 'b';
// const c = null;
// console.log(!(!c || !c));
// console.log(!(!c || !a));