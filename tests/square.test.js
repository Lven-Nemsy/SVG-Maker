const Square = require("./square.js");

const shape1 = new Square();
shape1.setColor("blue");
expect(shape1.render()).toEqual(
	`<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${shape1.color}" />`
);