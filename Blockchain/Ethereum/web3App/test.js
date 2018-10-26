/**
 * test
 *
 * Created by tarso on 25/10/18
 */

setTimeout(() => console.log('Oi inicial 1!!!'), 3000);
setTimeout(() => console.log('Oi inicial 2!!!'), 2000);
setTimeout(() => console.log('Oi inicial 3!!!'), 1000);


function printPromisse(nOis) {
  return new Promise (function (resolve, reject) {
    try {
      setTimeout(() => {
        if (nOis > 0) {
          console.log('oi', nOis);
          nOis -= 1;
          printPromisse(nOis)
        } else {
          console.log('Fimdoi!!!');
        }
        resolve(null);
      }, 1);
    } catch (e) {
      reject(new Error(e));
    }
  });
}

printPromisse(102400);
