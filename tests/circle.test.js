const Circle = require("../lib/circle");


// Tests if code is being rendered properly
describe("SVG CIRCLE", () => {
	test("will this return the svg string", () => {
		const shape = new Circle("a", "b", "c");

		expect(shape.render()).toEqual(
			`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="b" /><text x="150" y="118" font-size="60" text-anchor="middle" fill="a">c</text></svg>`
		);
	});
});
