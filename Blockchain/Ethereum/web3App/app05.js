/**
 * app05
 *
 * Created by tarso on 13/11/18
 */

// Essa transação manda da conta raiz para uma conta no mesmo nó

const Web3 = require('web3');

// connect to any peer; using infura here
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:8545"));

// contents of keystore file, can do a fs read
const keystore = '{"address":"074c774fb4bdb35fb4010e7b76e6ba92ead8aaf4","crypto":{"cipher":"aes-128-ctr","ciphertext":"a00a2856dac05d18dd71f0855cf98519fd9a7734ee7085fa6b64eee3b93bbfcd","cipherparams":{"iv":"e53a402920c1df0998b75913f6680e7c"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"92463062619e7a0c456d3c17dc8b94923707d29c948f6d47eff9ba92677853ef"},"mac":"2fd60801d9998667ccd7b8d0ed4535fc6f2437192ae998eb2f753a083028223f"},"id":"4d91c171-92e3-4c78-8acc-7af0b05e94d3","version":3}';
const decryptedAccount = web3.eth.accounts.decrypt(keystore, 'changeit');

const rawTransaction = {
  "from": "0x074c774fb4bdb35fb4010e7b76e6ba92ead8aaf4",
  "to": "0x023a31b4810a2b6a74b5c6373bb11aab64e2a420",
  "value": web3.utils.toHex(web3.utils.toWei("6", "ether")),
  "gas": 2000000,
  "chainId": 1561
};
decryptedAccount.signTransaction(rawTransaction)
  .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
  .then(receipt => console.log("Transaction receipt: ", receipt))
  .catch(err => console.error(err));

// Or sign using private key from decrypted keystore file
/*
web3.eth.accounts.signTransaction(rawTransaction, decryptedAccount.privateKey)
  .then(console.log);
*/