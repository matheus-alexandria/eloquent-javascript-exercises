// 1. car and cat
let regex1 = 'My __scat is running away';

console.log(regex1.match(/ca[rt]/));

// 2. pop and prop
let regex2 = 'Be wary of prop';

console.log(regex2.match(/pr?op/));

// 3. ferret, ferry, and ferrari
let regex3 = 'Hey man, look at my sick ferrari';

console.log(regex3.match(/ferr((et)|(y)|(ari))/));

// 4. Any word ending in ious
let regex4 = 'Be cautious, this is dangerous';

console.log(regex4.match(/\b\w+ious\b/g));

// 5. A whitespace character followed by a period, comma, colon, or semicolon
let regex5 = ' . , \' "';

console.log(regex5.match(/ [\.,'"]/g));

// 6. A word longer than six letters
let regex6 = 'World Ender Grognost';

console.log(regex6.match(/\b\w{7,}\b/));

// 7. A word without the letter e (or E)
let regex7 = 'A big frase with some symbols .;," and some others -_-';

console.log(regex7.match(/\b[^eE\s_]+\b/g));
