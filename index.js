console.log("\n\n This is a README.md file generator. \n Please type your answers to the questions below to generate your own README.md file.\n");

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
    name: 'repoTitle',
    message: 'What is the exact title of your repository?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project:',
  },
  {
    type: 'input',
    name: 'website',
    message: 'Please enter deployed website URL:',
  },
  {
    type: 'input',
    name: 'imgAlt',
    message: 'Please enter your screenshot Alt:',
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Please enter relative path to screenshot:',
  },
  {
    type: 'input',
    name: 'screenshotSubtitle',
    message: 'Please enter screenshot subtitle:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'librariesAndTools',
    message: 'Please enter libraries and tools used for your project (write them in a list like this <li>First item</li> <li>Second item</li> <li>Third item</li>):',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: '\n Please choose a license for your project\n (Visit https://choosealicense.com/ if you are unsure, which license to choose):',
    choices: ['MIT', 'GPL-3-0', 'apache-2-0', 'BSD-3-clause', 'ISC', '0bsd'],
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
    name: 'website',
    message: 'What is your website URL?',
  },
  {
    type: 'input',
    name: 'webLinkPlaceholder',
    message: 'What is the placeholder for the website URL?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
]).then((answers)=> {
  console.log(answers)

// fs.writeFile(`index.html`, HTMLTemplate, (error) => error ? console.error(error) : console.log(`Success`)

// fs.writeFile(`${answers.title}.html`, HTMLTemplate, (error) =>
//       error ? console.error(error) : console.log(`Success!`)

      // fs.writeFile(`README.md`, `${answers.title}`, (error) =>
      // error ? console.error(error) : console.log(`Success!`)
            fs.writeFile(`README.md`, generateMarkdown(answers), (error) =>
      error ? console.error(error) : console.log(`Success!`)
);
});



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