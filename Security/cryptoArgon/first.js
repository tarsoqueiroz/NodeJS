// source: https://www.youtube.com/watch?v=fEV3D0ZuBgM

const argon2 = require('argon2');

async function hashit() {
  let hash;

  try {
    hash = await argon2.hash('changeme');
    console.log(hash);
  } catch (err) {
    console.log("Error: " + err);
  }

  try {
    if (await argon2.verify(hash, 'changeme')) {
      console.log('matched with changeme');
    } else {
      console.log('unmatched with changeme');
    }
  } catch (err) {
    console.log("Error: " + err);
  }

  try {
    if (await argon2.verify(hash, 'changeit')) {
      console.log('matched with changeit');
    } else {
      console.log('unmatched with changeit');
    }
  } catch (err) {
    console.log("Error: " + err);
  }

}

hashit();

/*

try {
  const hash = await argon2.hash("password");
  console.log("argon2('password') = ", hash);
} catch (err) {
  console.log("ops, something wrong!!!");
}

*/