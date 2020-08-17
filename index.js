var mouse = require('./mouse');
var cat = require('./cat');
var dog = require('./dog');

var lexus = new dog('Lexus');
var tom = new cat('Tom');
var jerry = new mouse('Jerry');

try {
	tom.eat(lexus);	
} catch (err) {
	console.log('err');
}
console.log(tom);