/**
 * Created by USER: tarso.
 * On         DATE: 04/10/16.
 * By         NAME: mqtt-example.js.
 */

/**
 * from https://www.npmjs.com/package/mqtt
 */

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://10.15.20.117:1883');

client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
