/**
 * Created by USER: tarso.
 * On         DATE: 04/10/16.
 * By         NAME: mqtt-publisher.js.
 */

/**
 * Simple publisher for a MQTT Server
 */

var mqtt = require('mqtt');
var mqttPublisher = mqtt.connect('mqtt://10.15.20.117:1883');

mqttPublisher.on('connect', function () {
  console.log('Subscribing...');
  mqttPublisher.subscribe('zomqtt');

  console.log('Publishing...');
  mqttPublisher.publish('zomqtt', 'Send message at ' + (new Date().toISOString()));

  console.log('Going out..');
  mqttPublisher.end();
});
