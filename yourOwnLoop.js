function loop(values, test, body, update) {
  const updated = [];
  
  for(e of values) {
    if(!test(e)) {
      continue
    }

    body(e);

    updated.push(update(e));
  }

  return updated;
}

console.log(loop([1, 2, 3 , 4], (e) => e > 2, (e) => console.log(`Old value: ${e}`), (e) => e * 2));