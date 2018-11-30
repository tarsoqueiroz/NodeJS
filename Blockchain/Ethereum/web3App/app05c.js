/**
 * app05c
 *
 * Created by tarso on 29/11/18
 */
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:8545"));

const keystore = '{"address":"023a31b4810a2b6a74b5c6373bb11aab64e2a420","crypto":{"cipher":"aes-128-ctr","ciphertext":"391f7f0a1392d3a31d27aed9b84ad464cac33d5110a924516a8bc7edfa16d279","cipherparams":{"iv":"4f0f16a08e5b7bdd9c3649af646ba2d2"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"25725424151dfbce214916c5523824f3428add01e8b72194902b8eaf9be3a751"},"mac":"6838aee3b65ba88e61d58f53401401d79cea23f0d2649ca0e2401961da68e7d3"},"id":"c07413c7-f353-4a01-ae9f-f6839707b9fb","version":3}';
const decryptedAccount = web3.eth.accounts.decrypt(keystore, 'changeit');

console.log(decryptedAccount);
