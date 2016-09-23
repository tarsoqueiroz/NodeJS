/**
 * Created by USER: tarso.
 * On         DATE: 26/08/16.
 * By         NAME: rmqt01send.js.
 */

/**
 * Source: https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
 */

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:8080', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q, new Buffer('Hello World!'));
    console.log(" [x] Sent 'Hello World!'");
  });
});
