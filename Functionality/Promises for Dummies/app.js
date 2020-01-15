/**
 * Created by USER: tarso.
 * On         DATE: 18/07/17.
 * By         NAME: app.js.
 */

'use strict';

/* ES6 */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => { // fat arrow
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black'
    };
    resolve(phone);
  } else {
      const reason = new Error('mom is not happy');
      reject(reason);
    }
  }
);

const showOff = function (phone) {
  const message = 'Hey friend, I have a new ' +
    phone.color + ' ' + phone.brand + ' phone';
  console.log(message, ' in showOff before setTimeout()');
  setTimeout(() => {
    console.log(message, 'in showOff inside of setTimeout()');
    return Promise.resolve(message);
  }, 1000 * 2);
};

// call our promise
const askMom = function () {
  willIGetNewPhone
    .then(showOff)
    .then(fulfilled => console.log(fulfilled, 'in second then on askMom function')) // fat arrow
    .catch(error => console.log(error.message)); // fat arrow
};

askMom();
