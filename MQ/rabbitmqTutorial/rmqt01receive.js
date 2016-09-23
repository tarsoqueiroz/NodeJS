/**
 * Created by USER: tarso.
 * On         DATE: 26/08/16.
 * By         NAME: rmqt01receive.js.
 */

/**
 * Source: https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
 */

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:8080', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
  });

  console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
  ch.consume(q, function(msg) {
    console.log(" [x] Received %s", msg.content.toString());
  }, {noAck: true});
});
