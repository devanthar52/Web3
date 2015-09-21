"use strict";

var _ = require('underscore');
//var	util = require('util');

//------------------------------------------------
//	Base class (constructor)
function Base (arg) {
	this.arg = arg || 'default';
	this.num = 43;
}
//	Add method to all Base instances
Base.prototype.logStatus = function () {
	console.log(this.arg + '–––' + this.num);
}

//	Test Base class
var base = new Base(17);
base.logStatus();

//------------------------------------------------
//	Main (constructor) derived from Base
function Main (arg) {
	Base.call(this, arg);
}
Main.prototype = new Base();
//util.inherits(Main, Base);

//	Test Main
var main = new Main(12);
main.logStatus();

//------------------------------------------------
//	other is a object, no constructor specified
var other = {};
Base.call(other);
_.extend(other, Base.prototype);
other.logStatus();

//------------------------------------------------
//	which ones are instances?
console.log('---');
console.log(main instanceof Main ? 'main ∈ Main' : 'main ∉ Main');
console.log(main instanceof Base ? 'main ∈ Base' : 'main ∉ Base');
console.log(other instanceof Base ? 'other ∈ Base' : 'other ∉ Base');
console.log(main.hasOwnProperty('logStatus'));
console.log(other.hasOwnProperty('logStatus'));




