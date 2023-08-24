const Square = require("../lib/square");

describe("SVG SQUARE", () => {
	test("will this return the svg string", () => {
		const shape = new Square("a", "b", "c");

		expect(shape.render()).toEqual(
			`<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" h= "200" fill="b" /><text x="125" y="140" font-size="60" text-anchor="middle" fill="a">c</text></svg>`
		);
	})
})
 