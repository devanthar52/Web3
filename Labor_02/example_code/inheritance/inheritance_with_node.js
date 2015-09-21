'use strict';

const
  events = require('events'),
  util = require('util'),

// client constructor
EventsClient = function() {
  events.EventEmitter.call(this);
};
util.inherits(EventsClient, events.EventEmitter);

const client = new EventsClient();
client.on("myEvent", function() {
  console.log("myEvent triggered");
})

client.emit("myEvent");
