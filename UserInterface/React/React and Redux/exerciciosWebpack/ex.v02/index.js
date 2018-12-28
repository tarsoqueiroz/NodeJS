/**
 * index.js
 *
 * Author: tarso
 * Date  : 28/12/18
 * Source:
 */
'use strict';

console.log('*** Webpack ex 2 ***');

import Pessoa from './pessoa'

const pessoa = new Pessoa('Tarso Queiroz');
console.log(pessoa.toString());