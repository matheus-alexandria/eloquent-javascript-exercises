function countChar(s, char) {
  return s.toLowerCase().split('').filter((c) => c === char).length;
}

console.log(countChar('thats bullshit, Baby', 'b'));