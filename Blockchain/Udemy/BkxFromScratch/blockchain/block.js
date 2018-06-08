// block.js

const SHA256 = require('crypto-js/sha256');

const DIFFICULTY = 4;

class Block {
  constructor(timestamp, lastHash, hash, data, nonce) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
  }

  toString() {
    return `Block -
      Timestamp : ${this.timestamp}
      Last Hash : ${this.lastHash}
      Hash      : ${this.hash}
      Nonce     : ${this.nonce}
      Data      : ${this.data}`;
  }

  static genesis() {
    const timestamp = 1528139001561;
    const lastHash = '0000000000000000000000000000ce1e9a200000000000000000000000000000';
    const data = [{"Block":"Genesis"}];
    const nonce = 0;
    const hash = Block.hash(timestamp, lastHash, data, nonce);

    // console.log('Hash on genesis():', hash);

    return new this(timestamp, lastHash, hash, data, nonce);
  }

  static mineBlock(lastBlock, data) {

    const lastHash = lastBlock.hash;
    let hash, timestamp;
    let nonce = 0;

    do {
      nonce++;
      timestamp = Date.now();
      hash = Blockhash = Block.hash(timestamp, lastHash, data, nonce);
    } while (hash.substring(0, DIFFICULTY) !== '0'.repeat(DIFFICULTY));

    return new this(timestamp, lastHash, hash, data, nonce);
  }

  static hash(timestamp, lastHash, data, nonce) {
    return SHA256(`${timestamp}${lastHash}${data}${nonce}`).toString();
  }

  static blockHash(block) {
    const { timestamp, lastHash, data, nonce } = block;
    return Block.hash(timestamp, lastHash, data, nonce);
  }
}

module.exports = Block;
