/**
 * index.js
 *
 * Author: tarso
 * Date  : 28/12/18
 * Source:
 */
'use strict';

console.log('*** Webpack ex 4 ***');

const produto = {
  nome: 'Caneta Bic Preta',
  preco: 1.90,
  desconto: 0.05
};

function clone(objeto) {
  return { ...objeto };
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul';

console.log(produto, novoProduto);
