function Circle(r) {}
var c = new Circle(2);
function Circle(r) {
	this.radius=radius;
	this.area= function () {
		return Math.PI * this.radius * this.radius;
	}
}
