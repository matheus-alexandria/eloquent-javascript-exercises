const arrayToList = (arr) => {
  function node(position) {
    if (position >= arr.length) {
      return null;
    }

    return {
      value: arr[position],
      rest: node(position + 1),
    }
  }

  return node(0);
}

const listToArray = (list) => {
  const array = [];
  let refList = list;

  if (!refList.value) {
    return array;
  }

  array.push(refList.value);

  while (refList.rest) {
    refList = refList.rest;
    array.push(refList.value);
  }

  return array;
}

const prepend = (list, element) => {
  return {
    value: element,
    rest: list,
  }
}

const nth = (list, value) => {
  function find(list, value, position) {
    if (list.value === value) {
      return position; 
    }
    
    if (!list.rest) {
      return undefined;
    }

    return find(list.rest, value, position + 1);
  }

  return find(list, value, 0);
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3, 4])));
console.log(prepend(arrayToList([1, 2]), 0));

console.log(nth(arrayToList([1, 2, 3, 4]), 10));