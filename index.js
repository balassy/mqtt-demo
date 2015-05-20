var Mosca = require('mosca');
var Mqtt = require('mqtt');

var config = {
  port: 1883,
  host: 'localhost'
};

var broker = new Mosca.Server(config);
broker.on('ready', onReady);

function onReady() {
  console.log('[Broker] Ready.');

  var topic = 'myTopicName';

  var subscriber = Mqtt.connect(config);
  subscriber.on('connect', function() {
    subscriber.subscribe(topic); 
  });
  subscriber.on('message', function (topic, message) {
    console.log('[Client] Message received on topic "%s": ', topic, message.toString());    
  });    
}

// mqtt publish -h localhost -p 1883 -t myTopicName -m "Hello IoT!"
// cmd /k mqtt subscribe -h localhost -p 1883 -t myTopicName