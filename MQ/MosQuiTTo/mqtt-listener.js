/**
 * Created by USER: tarso.
 * On         DATE: 04/10/16.
 * By         NAME: mqtt-listener.js.
 */

/**
 * Simple listener of MQTT server
 */

var mqtt = require('mqtt');
var mqttListener  = mqtt.connect('mqtt://10.15.20.117:1883');

mqttListener.on('connect', function () {
  console.log('Subscribing...');
  mqttListener.subscribe('zomqtt');
});

mqttListener.on('message', function (topic, message) {
  // message is Buffer
  var mqttMessage = message.toString();

  console.log('Message from MQTT Server: ' + mqttMessage);

  if (mqttMessage == 'FIM') {
    mqttListener.end();
  }
});
