
var faye = require('faye'),
	http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var client = new faye.Client('http://localhost:8000/');
	

checkText = function(data) {
	console.log("in Function " + data.user);
	var validtext;
	var timestamp = new Date().toISOString().slice(0, 10);
	if(data.text == "/help"){
	
	
	client.publish('/messages', {
		user: "Chatbot",
		text: "This is a helpfull App!"
	});
	}
	else if(data.text == "/date") {
		client.publish('/messages', {
		user: "Chatbot",
		text: "The actual Date is: " +timestamp
	});
	}
}	
exports.checkText = checkText;
	