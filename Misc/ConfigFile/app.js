/**
 * Created by USER: tarso.
 * On         DATE: 04/05/17.
 * By         NAME: app.js.
 */

'use strict';

const config = require('./config.json');

console.log('User      :', config.user);
console.log('Name      :', config.userName);
console.log('mail      :', config.mail.personal);
console.log('Comercial :', config.mail.profissional);
console.log('Cor 0     :', config.colors[0]);
console.log('Cor 1     :', config.colors[1]);
console.log('Cor 2     :', config.colors[2]);
