const Shapes = require("./shapes");

class Triangle extends Shapes {
	render() {
		return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="138" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
	}
}

module.exports = Triangle;