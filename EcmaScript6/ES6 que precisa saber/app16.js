/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app16.js.
 */

'use strict';

class Animal {
  constructor(name) {
    this._name = name
  }

  getName() {
    return this._name
  }

  setName(name) {
    this._name = name
  }
}

const animal = new Animal('dog');

animal.getName(); // dog
console.log(animal);

animal.setName('cat');
console.log(animal);

console.log(animal.getName()); // cat
console.log(animal);

