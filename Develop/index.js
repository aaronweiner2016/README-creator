// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a description.',
        name: 'description',
    },    
    {
        type: 'checkbox',
        message: 'Install npm i',
        name: 'npmi',
        choices: 'npm i',
    },
    {
        type: 'input',
        message: 'Usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What license is this project under?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What contributions were made?',
        name: 'contributions',
    },
    {
        type: 'prompt',
        message: 'To run tests, enter the following command',
        name: 'npm test',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('README.md', generateMarkdown(fileName, data), (err) =>
            err ? console.error(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(response)
        )
}

// Function call to initialize app
init();
