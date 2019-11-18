const randomId = require('random-id');

let nSx1       = 0;
let nLen       = 0;
let strPattern = "";

// 5 random id with 10 char of length for lowercased, capitals and numbers 
console.log("*** 5 random id with 10 char of length");
nLen = 10;
strPattern = "aA0";
console.log(`len=${nLen}, char set="${strPattern}"`);
for (nSx1 = 0; nSx1 < 5; nSx1++) {
  console.log(`id.${nSx1}: ${randomId(nLen, strPattern)}`);
}

// 5 random id with 10 char of length for capitals and numbers 
console.log("*** 5 random id with 10 char of length");
nLen = 10;
strPattern = "A0";
console.log(`len=${nLen}, char set="${strPattern}"`);
for (nSx1 = 0; nSx1 < 5; nSx1++) {
  console.log(`id.${nSx1}: ${randomId(nLen, strPattern)}`);
}

// 5 random id with 10 char of length for lowercased and numbers 
console.log("*** 5 random id with 10 char of length");
nLen = 10;
strPattern = "a0";
console.log(`len=${nLen}, char set="${strPattern}"`);
for (nSx1 = 0; nSx1 < 5; nSx1++) {
  console.log(`id.${nSx1}: ${randomId(nLen, strPattern)}`);
}

// 5 random id with 10 char of length for lowercased and capitals
console.log("*** 5 random id with 10 char of length");
nLen = 10;
strPattern = "aA";
console.log(`len=${nLen}, char set="${strPattern}"`);
for (nSx1 = 0; nSx1 < 5; nSx1++) {
  console.log(`id.${nSx1}: ${randomId(nLen, strPattern)}`);
}

// 5 random id with 10 char of length for capitals, number and special chars
console.log("*** 5 random id with 10 char of length");
nLen = 10;
strPattern = "A0{";
console.log(`len=${nLen}, char set="${strPattern}"`);
for (nSx1 = 0; nSx1 < 5; nSx1++) {
  console.log(`id.${nSx1}: ${randomId(nLen, strPattern)}`);
}

// 5 random id with twice 16 char of length separate with dot for lowercase and number
console.log("*** 5 random id with 10 char of length");
nLen = 16;
console.log(`len=${nLen}`);
for (nSx1 = 0; nSx1 < 5; nSx1++) {
  console.log(`id.${nSx1}: ${randomId(nLen, "a0")}.${randomId(nLen, "a0")}`);
}
