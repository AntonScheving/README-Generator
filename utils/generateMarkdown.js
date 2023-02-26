// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

[![Licence](https://img.shields.io/static/v1?label=Licence&message=${answers.license}&color=blue&?style=plastic&logo=appveyor)](https://opensource.org/license/${answers.license})
\n\n

## Table Of Content\n
- [Description](#description)
- [Deployed website link](#website)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)
- [Tests](#tests)
- [GitHub](#github)
- [Contact](#contact)
- [License](#license)
\n\n

## Description\n
![GitHub repo size](https://img.shields.io/github/repo-size/${answers.github}/${answers.repoTitle}?style=plastic)\n
![GitHub top language](https://img.shields.io/github/languages/top/${answers.github}/${answers.repoTitle}?style=plastic)\n

${answers.description}
\n\n

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

${answers.title} is built with the following tools and libraries: <ul>${answers.librariesAndTools}</ul>
\n\n

## Usage\n 
${answers.usage}
\n\n

## Contribution\n 
${answers.contribution}
\n\n

## Tests\n 
${answers.tests}
\n\n

## GitHub\n
https://github.com/${answers.github}
\n

<p>Visit my website: <strong><a href="${answers.website}">${answers.webLinkPlaceholder}</a></strong>
\n\n

## Contact\n
Feel free to reach out to me on my email:
${answers.email}
\n\n

## License\n
[![Licence](https://img.shields.io/static/v1?label=Licence&message=${answers.license}&color=blue)](https://opensource.org/license/${answers.license})
\n
`;
}

module.exports = generateMarkdown;
