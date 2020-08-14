function mouse(name) {
	this.name = name;
	this.isDead = false;
}
mouse.prototype.eat = function() {
	this.isDead = true;
};
module.export = Mouse;