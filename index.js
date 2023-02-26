console.log("\n\n This is a README.md file generator. \n Please type your answers to the questions below to generate your own README.md file.\n");

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const generateHTML = (answers) => {
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
};


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
]).then((answers)=> {
  console.log(answers)
const HTMLTemplate = generateHTML(answers);

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