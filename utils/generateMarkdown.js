// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
## Table Of Content\n
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
\n\n

// ## Description\n
//  ${answers.description }
// \n\n

switch (answers.description) {
  case undefined:
  case '':
    break;
  default:
    ## Description\n\n 
    ${answers.description}\n\n);
  


Deployed website: ${answers.website}
\n\n

<p align="center">
  <img alt="${answers.imgAlt}" [Screenshot] src="${answers.screenshot}"><br>
${answers.screenshotSubtitle}
</p>
\n\n

## Installation\n
${answers.installation}
\n\n

## Usage\n ${answers.usage}
\n\n

## Contribution\n 
${answers.contribution}
\n\n

## Tests\n 
${answers.tests}
\n\n

## GitHub\n
${answers.github}
\n\n

## Contact\n
${answers.email}
\n\n

## License\n
${answers.license}
\n\n
`;
}

module.exports = generateMarkdown;
