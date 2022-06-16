function reverseArray(arr) {
  const reversedArray = [];

  for(let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

// Second and faster attemp
function reverseArrayInPlace(arr) {
  let len = 0;
  
  if (arr.length % 2 === 0) {
    len = arr.length / 2;
  } else {
    len = Math.floor(arr.length / 2);
  }

  let end = arr.length - 1;
  for(let i = 0; i < len; i++) {
    let startElement = arr[i];
    let endElement = arr[end];

    arr[i] = endElement;
    arr[end] = startElement;
    end--;
  }
}

// First Attemp
// function reverseArrayInPlace2(arr) {
//   const reversedArray = [];

//   for(let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }

//   for(let i = 0; i < arr.length; i++) {
//     arr[i] = reversedArray[i];
//   }
// }

console.log(reverseArray([1, 2, 3]));

arr = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArrayInPlace(arr);
console.log(arr);