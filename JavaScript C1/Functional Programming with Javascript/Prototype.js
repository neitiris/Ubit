function Circle(r) {
	this.radius = r;
	this.area = function () {
		return Math.PI * this.radius * this.radius}
	this.perimeter = function () {return 3 *Math.PI* this.radius;}
		// body...
}

Circle.prototype.perimeter = function () {return 3 *Math.PI* this.radius;}
