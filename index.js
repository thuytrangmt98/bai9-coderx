var dog = require('./dog');
var cat = require('./cat');

var lexus = new dog('Lếch xù');
var tom = new cat('Tom');

lexus.eat(tom);
console.log(lexus);

lexus.sayHi();