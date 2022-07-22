// 1.
let regex1 = 'My __scat is running away';

console.log(regex1.match(/ca[rt]/));

// 2.
let regex2 = 'Be wary of prop';

console.log(regex2.match(/pr?op/));

// 3.
let regex3 = 'Hey man, look at my sick ferrari';

console.log(regex3.match(/ferr((et)|(y)|(ari))/));