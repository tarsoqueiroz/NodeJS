/**
 * app05a
 *
 * Created by tarso on 13/11/18
 */

// Essa transação manda da conta usuário no nó 0 para uma conta nó 1 via nó 2

const Web3 = require('web3');

// connect to any peer; using infura here
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:28545"));

// contents of keystore file, can do a fs read
const keystore = '{"address":"023a31b4810a2b6a74b5c6373bb11aab64e2a420","crypto":{"cipher":"aes-128-ctr","ciphertext":"391f7f0a1392d3a31d27aed9b84ad464cac33d5110a924516a8bc7edfa16d279","cipherparams":{"iv":"4f0f16a08e5b7bdd9c3649af646ba2d2"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"25725424151dfbce214916c5523824f3428add01e8b72194902b8eaf9be3a751"},"mac":"6838aee3b65ba88e61d58f53401401d79cea23f0d2649ca0e2401961da68e7d3"},"id":"c07413c7-f353-4a01-ae9f-f6839707b9fb","version":3}';
const decryptedAccount = web3.eth.accounts.decrypt(keystore, 'changeit');

const rawTransaction = {
  "from": "0x023a31b4810a2b6a74b5c6373bb11aab64e2a420",
  "to": "0x958965deebc6da2a39d6139716c7511d315795e2",
  "value": web3.utils.toHex(web3.utils.toWei("3", "ether")),
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