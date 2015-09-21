"use strict";
var EventEmitter = require('events').EventEmitter;
let _ = require('underscore');
var myObj = {};
EventEmitter.call(myObj);
_.extend(myObj, EventEmitter.prototype);
myObj.on("myEvent", function() {
  console.log("myEvent was triggered");
});
myObj.emit("myEvent");
