var chalk = require('chalk');

function dog(name) {
	this.name = name;
	this.stomach = [];
}
dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};
dog.prototype.sayHi = function() {
	console.log('¡Hola! Yo soy un perro. Mi nombre es ' + chalk.blue(this.name));
}

module.exports = dog;