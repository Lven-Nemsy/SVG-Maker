const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createSVG } = require("./SVGenerator.js");
const Shapes = require("./shapes.js");
const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");
const SVGenerator = require("./SVGenerator.js");

class CLI {
	constructor() {
	
	}
	run() {
		return inquirer
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
					type: "input",
					name: "logoShape",
					message: "Please choose from the following shapes.",
				},
				{
					type: "input",
					name: "shapeColor",
					message: "What color should the logo shape be?",
				},
			])
			.then((answers) => {
				const outputPath = join(__dirname, "output.svg");
				const svgContent = new SVGenerator
                svgContent.logo(logo, logoColor)
                return writeFile(outputPath, svgContent);
			});
            
	}
}

module.exports = CLI;
