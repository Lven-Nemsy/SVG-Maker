const Circle = require("./circle.js");

const shape = new Circle();
shape.setColor("${this.shapeColor}");
expect(shape.render()).toEqual(
	`<circle cx="25" cy="75" r="20" fill="${shape.color}" />`
);