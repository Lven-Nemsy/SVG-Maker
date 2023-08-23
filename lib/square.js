const Shapes = require("./shapes");

class Square extends Shapes {
	render() {
		return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}" />`;
	}
}

module.exports = Square;