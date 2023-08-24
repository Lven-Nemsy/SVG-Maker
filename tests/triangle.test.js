const Triangle = require("../lib/triangle");

describe("SVG TRIANGLE", () => {
	test("will this return the svg string", () => {
		const shape = new Triangle("a", "b", "c");

		expect(shape.render()).toEqual(
			`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="b" /><text x="150" y="138" font-size="60" text-anchor="middle" fill="a">c</text></svg>`
		);
	});
});
