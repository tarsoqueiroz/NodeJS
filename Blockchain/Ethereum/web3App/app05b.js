/**
 * app05b
 *
 * Created by tarso on 13/11/18
 */

// Essa transação manda da conta usuário no nó 2 para uma conta nó 1 via nó 0

const Web3 = require('web3');

// connect to any peer; using infura here
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:28545"));

// contents of keystore file, can do a fs read
const keystore = '{"address":"29448b12814070b6e0e8ac03dcf26a8915a2c526","crypto":{"cipher":"aes-128-ctr","ciphertext":"df3b906b3f850511c1eac271d7ec9e6f5133e9b4f7086a5df6c516c0f79ded63","cipherparams":{"iv":"0cfe9b642edd0312c07d884df9174166"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"5e2e04f718c1fd221839d935b440677d23ccfa0a27a3f4dc61289468b8f48c10"},"mac":"24fa55ea4a14b28383fe076ab44d3706df85e694308ba835124c05382e55b05f"},"id":"6b91432a-aae2-40ba-b9d6-18e368cee8c8","version":3}';
const decryptedAccount = web3.eth.accounts.decrypt(keystore, 'changeit');

const rawTransaction = {
  "from": "0x29448b12814070b6e0e8ac03dcf26a8915a2c526",
  "to": "0x958965deebc6da2a39d6139716c7511d315795e2",
  "value": web3.utils.toHex(web3.utils.toWei("1", "ether")),
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