/**
 * test.js
 *
 * Created by tarso on 20/06/18
 */

const cstrPeers = "ws://localhost:5001,ws://localhost:5002,ws://localhost:5003,ws://localhost:5004"

let strPeers1 = cstrPeers.split(',');

console.log(strPeers1);
console.log(strPeers1[1]);