/**
 * test.js
 *
 * Created by tarso on 20/06/18
 */

const cstrPeers = "ws://localhost:5001,ws://localhost:5002,ws://localhost:5003,ws://localhost:5004"

let strPeers1 = cstrPeers.split(',');

console.log(strPeers1);
console.log(strPeers1[1]);

let chain = ['block0'];

console.log(chain);
console.log(chain[chain.length-1]);
chain.push('block1');
console.log(chain);
console.log(chain[chain.length-1]);
chain.push('block2');
console.log(chain);
console.log(chain[chain.length-1]);
chain.push('block3');
console.log(chain);
console.log(chain[chain.length-1]);

class clTq {
  constructor() {
    this.strField1 = 'Field 1';
    this.strField2 = 'Field 2';
  }
  toString() {
    return `clTq -
      strField1 : ${this.strField1}
      strField2 : ${this.strField2}`;
  }
  setField1(varField1) {
    this.strField1 = varField1;
  }
  setField2(varField2) {
    this.strField2 = varField2;
  }
}

let varTq = new clTq();
console.log(varTq.toString());
varTq.setField1('Field 1 modified');
console.log(varTq.toString());

var { strField2 } = varTq;
console.log(strField2);

var { strField1 } = varTq;
console.log(strField1);

strField2 = 'Modified strField2';
console.log(varTq.toString());
console.log(strField2);
