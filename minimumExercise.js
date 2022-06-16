function minimum(x, y) {
  if (x > y) {
    return y;
  } else {
    return x;
  }
}

console.log(minimum(10, 15));
console.log(minimum(15, 15));
console.log(minimum(20, 15));