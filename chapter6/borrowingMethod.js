const overwriter = {
  value: 100,
  hasOwnProperty: 'hehe'
}

overwriter[Symbol.hasOwnProperty] = function(value) {
  for (prop of Object.keys(this)) {
    if (prop === value) {
      return true;
    }
  }

  return false;
}

const normal = {
  value: 100,
}

console.log('toString' in overwriter);
console.log(overwriter[Symbol.hasOwnProperty]('toString'));
console.log(overwriter[Symbol.hasOwnProperty]('hasOwnProperty'));
console.log(normal.hasOwnProperty('value'));
