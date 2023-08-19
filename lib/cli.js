const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createDocument } = require("./document");


class CLI {
    constructor () {
        this.title = ''
        this.tasks = [];
    }
    run() {
        return inquirer
        .prompt ([
            {
                type: 'input',
                name: 'logo',
                message: 'You can enter up to 3 characters for your logo.'
            },
            {
                type: 'input',
                name: 'logoColor',
                message:'What color should the characters be?'
            },
            {
                type: 'input',
                name: 'logoShape',
                message: 'Please choose from the following shapes.'
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color should the logo shape be?'
            }
        ])
        .then(({logo, logoColor, logoShape, shapeColor}) => {
            this.tasks.push({ logo, logoColor, logoShape, shapeColor });
            return writeFile(
                join('')
            )
        }
        
        ) 
    }
}