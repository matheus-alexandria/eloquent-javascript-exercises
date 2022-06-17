const dividedArray = ['This', ' will', ' be', ' joined'];

const joined = dividedArray.reduce((prev, cur) => {
  return prev.concat(cur);
});

console.log(dividedArray);
console.log(joined);