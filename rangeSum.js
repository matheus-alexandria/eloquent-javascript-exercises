function range(start, end, step = 1) {
  const rangeArray = [];

  if (step === 0) step = 1;

  if (step < 0) {
    for(let i = start; i >= end; i += step) {
      rangeArray.push(i);
    }
    
    return rangeArray;
  }

  for(let i = start; i <= end; i += step) {
    rangeArray.push(i);
  }

  return rangeArray;
}

function sum(arr) {
  let sum = 0;

  for(ele of arr) {
    sum += ele;
  }

  return sum;
}

console.log(sum(range(1,10)));
console.log(range(1, 10, 2));
console.log(range(5, 1, -1));
console.log(range(1, 3, 0));