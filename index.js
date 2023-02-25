const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt(
// array of questions for user
// const questions = 
[
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter test instructions for your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
])



// console.log(questions);
// console.log(inquirer);


// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// const init() => {

// }
// function init() {

// }

// function call to initialize program
// init();
// inquirer.createPromptModule(questions)