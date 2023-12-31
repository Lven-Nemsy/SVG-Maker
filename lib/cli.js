const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");
const SVGenerator = require("./SVGenerator.js");


// Creates the CLI class which will be exported to index.js
class CLI {
	constructor() {
		this.svgGenerator = new SVGenerator();
	}
	run() {
		return inquirer
		// Questions to be answered.
			.prompt([
				{
					type: "input",
					name: "logo",
					message: "You can enter up to 3 characters for your logo.",
				},
				{
					type: "input",
					name: "logoColor",
					message: "What color should the characters be?",
				},
				{
					type: "list",
					name: "logoShape",
					message: "Please choose from the following shapes.",
					choices: ["Circle", "Square", "Triangle"],
				},
				{
					type: "input",
					name: "shapeColor",
					message: "What color should the logo shape be?",
				},
			])
			// The answer according to what shape is picked
			.then(({logoColor, logo, shapeColor, logoShape}) => {
				let shape;
				if (logoShape === 'Circle') {
					shape = new Circle(logoColor, shapeColor, logo)
				} if (logoShape === 'Square'){
					shape = new Square(logoColor, shapeColor, logo)
				} else if (logoShape === 'Triangle'){
					shape = new Triangle(logoColor, shapeColor, logo);
				}

				// SVG file is created
				fs.writeFile('./dist/logo.svg', shape.render(), (err, result)=>{
					if (err) throw err
					console.log('shape has been created');
				} )
			});

	}
}
module.exports = CLI;
