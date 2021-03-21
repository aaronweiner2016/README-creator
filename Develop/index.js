// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What city do you live in?',
        name: 'city',
    },
    {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'food',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What city do you live in?',
        name: 'city',
    },
    {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'food',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('README.md', createHtml(response), (err) =>
            err ? console.error(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
