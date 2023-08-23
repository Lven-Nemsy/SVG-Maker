const Triangle = require("./triangle.js");

const shape2 = new Triangle();
shape2.setColor("blue");
expect(shape2.render()).toEqual(
	`<polygon points="150, 18 244, 182 56, 182" fill="${shape2.color}" />`
);