/**
 * pessoa.js
 *
 * Author: tarso
 * Date  : 28/12/18
 * Source:
 */
'use strict';

export default class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  toString() {
    return `Pessoa: ${this.nome}`
  }
}
