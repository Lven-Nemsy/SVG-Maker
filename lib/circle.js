const Shapes = require("./shapes");

class Circle extends Shapes {
	render() {
		return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
	}
}

module.exports = Circle;