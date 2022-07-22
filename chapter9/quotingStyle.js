let text = "I'm impressed that this 'method' is actually working, aren't you 'something' else";

let corrected = text.replace(/'(\w+?)'/g, "\"$1\"");

console.log(corrected);