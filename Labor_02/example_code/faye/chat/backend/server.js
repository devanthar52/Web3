var http = require('http'),
    faye = require('faye'),
    EventEmitter = require('events'),
	bot = require("./chatbot");

var server = http.createServer(),
    bayeux = new faye.NodeAdapter({mount: '/'});

bayeux.attach(server);
server.listen(8000);
server.on('connection', function (stream) {
  console.log('someone connected!');
});

var client = bayeux.getClient(); //bayeux.getClient();

client.subscribe('/messages', function(msg) {
  console.log(msg);
  
});

bayeux.getClient().publish('/messages', {
  text:       'New Message!',
  inboxSize:  34
});