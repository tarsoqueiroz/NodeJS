const shortid = require('shortid');

let nSx1 = 0;

// Default char set
console.log("*** 5 id with default char set");
for (nSx1 = 0; nSx1 < 5; nSx1++) {
  console.log(`id.${nSx1}: ${shortid.generate()}`);
}

// Modified char set
console.log("\n*** 5 id with modified char set");
//let strCharSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@";
let strCharSet =   "0123456789{}[]<>;:,.?!%#&*-=_+uvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@";

shortid.characters(strCharSet);
console.log(`char set: ${strCharSet}`);
for (nSx1 = 0; nSx1 < 5; nSx1++) {
  console.log(`id.${nSx1}: ${shortid.generate()}`);
}
