const inquirer = require('inquirer');
const fs = require('fs');
const generateShape = require('./shapes.js');

inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to generate?',
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like the shape to be?'
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to add to the shape?',
        validate: function (value) {
            if (value.length != 3) {
                return 'Please enter exactly three letters';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'What color would you like the text to be?'
    }
]).then(answers => {
    const svg = generateShape(answers.shape, answers.color, answers.text, answers.textcolor);
    fs.writeFileSync('shapes.svg', svg);
});