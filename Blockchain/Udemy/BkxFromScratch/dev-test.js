const Block = require('./blockchain/block');

console.log(Block.genesis().toString());

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');

console.log(fooBlock.toString());