function cat(name) {
	this.name = name;
	this.stomach = [];
}
cat.prototype.eat = function() {
	this.stomach.push(mouse);
};
module.exports = cat;