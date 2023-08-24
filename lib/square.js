const Shapes = require("./shapes");


// Describes the shape of Square
class Square extends Shapes {
	render() {
		return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" h= "200" fill="${this.shapeColor}" /><text x="125" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
	}
}
module.exports = Square;