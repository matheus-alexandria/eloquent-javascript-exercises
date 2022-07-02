class MultiplyError extends Error {}

function privateMultiply(n1, n2) {
  if (Math.random() <= 0.2) {
    return n1 * n2;
  }

  throw new MultiplyError('Failed the operation');
}


let n1 = 10;
let n2 = 20;

for (;;) {
  try {
    console.log(privateMultiply(n1, n2));
    break;
  } catch (err) {
    if (err instanceof MultiplyError) {
      console.log(err.message);
    } else {
      throw (err);
    }
  }
}