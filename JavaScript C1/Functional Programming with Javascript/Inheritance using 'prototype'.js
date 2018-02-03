function Shape() {
	this.area = function () {return "you need to implement this!"}
	// body...
}
function Square(length) {
	this.length = length;
	this.area = function () {return this.length*this.length;}
	// body...
}
function rectamgle(height, width){
	this.height=height;
	this.width = width;
}
Square.prototype = new Shape();
Rectangle.prototype = new Shape();
new Square(2).area();
new rectangle(4,6).area();