var mouse = require('./mouse');

function cat(name) {
	this.name = name;
	this.stomach = [];
}
cat.prototype.eat = function(animal) {
	if(animal instanceof mouse) {
		this.stomach.push(animal);
	} else {
		throw new Error('Cat can only eat mouse')
	}
};
module.exports = cat;