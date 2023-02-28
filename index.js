console.log("\n\n This is a README.md file generator. Please read the included README file before using this application. \n\n Please type your answers to the questions below to generate your own README.md file.\n To type your answers press \n- 'Enter' \n- Then press 'i' \n- Press Ctrl v (Windows) - command v (Mac OS) to paste your text or start typing directly into the editor\n- Press 'escape' \n- Press colon ':' \n- Press 'wq' and 'Enter'\n\n");

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer.prompt(
// array of questions for user
// const questions = 
[
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?\n',
  },
  {
    type: 'input',
    name: 'repoTitle',
    message: 'What is the exact title of your repository?\n',
  },
  {
    type: 'editor',
    name: 'description',
    message: '\nPlease enter a description of your project: \nExplain the what, why, and how of your project. \nUse the following questions as a guide: \n\t- What was your motivation? \n\t- Why did you build this project? \n\t- What problem does it solve? \n\t- What did you learn?\n'
  },
  {
    type: 'input',
    name: 'deployedWebsite',
    message: 'Please enter deployed website URL:\n',
  },
  {
    type: 'input',
    name: 'imgAlt',
    message: 'Please enter your screenshot Alt:\n',
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Please enter relative path to screenshot:\n',
  },
  {
    type: 'input',
    name: 'screenshotSubtitle',
    message: 'Please enter screenshot subtitle:\n',
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'Please enter installation instructions for your project:\n',
  },
  {
    type: 'input',
    name: 'librariesAndTools',
    message: 'Please enter libraries and tools used for your project. Write them in a list like this: \n<li>First item</li> <li>Second item</li> <li>Third item</li>:\n',
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Please enter usage information for your project:\n',
  },
  {
    type: 'list',
    name: 'license',
    message: '\n Please choose a license for your project\n (Visit https://choosealicense.com/ if you are unsure, which license to choose):',
    choices: ['MIT', 'GPL-3-0', 'apache-2-0', 'BSD-3-clause', 'ISC', '0bsd'],
  },
  
  {
    type: 'editor',
    name: 'contribution',
    message: '\nPlease enter contribution guidelines for your project:\n',
  },
  {
    type: 'editor',
    name: 'tests',
    message: 'Please enter test instructions for your project:\n',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?\n',
  },
  {
    type: 'input',
    name: 'website',
    message: 'What is your website URL?\n',
  },
  {
    type: 'input',
    name: 'webLinkPlaceholder',
    message: 'What is the placeholder for the website URL?\n',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?\n',
  },
]).then((answers)=> {
  console.log(answers)

// fs.writeFile(`index.html`, HTMLTemplate, (error) => error ? console.error(error) : console.log(`Success`)

// fs.writeFile(`${answers.title}.html`, HTMLTemplate, (error) =>
//       error ? console.error(error) : console.log(`Success!`)

      // fs.writeFile(`README.md`, `${answers.title}`, (error) =>
      // error ? console.error(error) : console.log(`Success!`)
            fs.writeFile(`README.md`, generateMarkdown(answers), (error) =>
      error ? console.error(error) : console.log(`Success! You have now created a README.md `)
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