const low      = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('lowdb.json');
const db      = low(adapter)

// Check if posts exists
console.log("\n*** Has 'posts'?");
console.log(db.has('posts')
              .value());

// Get posts
console.log("\n*** Get 'posts'");
console.log(db.get('posts')
              .value());

// Get post with id=2
console.log("\n*** Get 'post' = 2");
console.log(db.get('posts')
              .find({ id: 2 })
              .value());

// Get post with id=9999
console.log("\n*** Get 'post' = 9999");
console.log(db.get('posts')
              .find({ id: 9999 })
              .value());

// Current State
console.log("\n*** Get State");
console.log(db.getState());
