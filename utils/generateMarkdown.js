// The generateMarkdown() function is defined at the bottom of the code and takes the user's answers as an argument. It uses template literals to generate the contents of the README.md file based on the user's answers. The function returns the generated content as a string, which is passed to the writeFile() method to be written to disk.

// The ${} is a syntax called "template literals" in JavaScript. It allows you to embed expressions inside string literals.

// The code is checking if the answers.title variable is truthy (i.e., not undefined, null, 0, false, or an empty string). If it is truthy, then it will return # ${answers.title}. If it is falsy, it will return false (because an empty string is falsy, and that would be the result of string concatenation with a falsy value).

// So the code is essentially checking if answers.title exists (user input) and is truthy. If it is, then it is creating a string that starts with a "#" symbol followed by the value of answers.title. If answers.title is not truthy, then it is returning false and the string mentioned will not be created. If a user leaves a question empty it will not be included in the generated README file/
function generateMarkdown(answers) {
  return `${answers.title && `# ${answers.title}`}

  ${
    answers.repoTitle &&
    `[![License](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=blue&?style=plastic&logo=appveyor)](https://opensource.org/license/${answers.license})\n\n`
  }

${answers.title && `## Table Of Content\n`}
${answers.description && `- [Description](#description)`}
${answers.deployedWebsite && `- [Deployed website link](#deployedWebsite)`}
${answers.installation && `- [Installation](#installation)`}
${answers.usage && `- [Usage](#usage)`}
${answers.contribution && `- [Contributing](#contribution)`}
${answers.tests && `- [Tests](#tests)`}
${answers.github && `- [GitHub](#github)`}
${answers.email && `- [Contact](#contact)`}
${answers.repoTitle && `- [License](#license)`}
\n\n

${
  answers.repoTitle &&
  `![GitHub repo size](https://img.shields.io/github/repo-size/${answers.github}/${answers.repoTitle}?style=plastic)\n`
}
  ${
    answers.repoTitle &&
    `![GitHub top language](https://img.shields.io/github/languages/top/${answers.github}/${answers.repoTitle}?style=plastic)\n\n`
  }

${
  answers.description &&
  `## Description\n
  ${answers.description}
\n\n`
}
\n
${
  answers.deployedWebsite &&
  `<p>Deployed website: <strong><a href="${answers.deployedWebsite}">${answers.deployedWebsite}</a></strong>
\n\n`
}
\n
${
  answers.screenshot &&
  `<p align="center">
  <img alt="${answers.imgAlt}" [Screenshot] src="${answers.screenshot}"><br>
${answers.screenshotSubtitle}
</p>
\n\n`
}
\n
${
  answers.installation &&
  `## Installation\n
${answers.installation}
\n\n`
}

${
  answers.librariesAndTools &&
  `${answers.title} is built with the following tools and libraries: <ul>${answers.librariesAndTools}</ul>
\n\n`
}
\n
${
  answers.usage &&
  `## Usage\n 
${answers.usage}
\n\n`
}
\n
${
  answers.contribution &&
  `## Contribution\n 
${answers.contribution}
\n\n`
}
\n
${
  answers.tests &&
  `## Tests\n 
${answers.tests}
\n\n`
}
\n
${
  answers.github &&
  `## GitHub\n
<a href="https://github.com/${answers.github}"><strong>${answers.github}</a></strong>
\n`
}

${
  answers.website &&
  `<p>Visit my website: <strong><a href="${answers.website}">${answers.webLinkPlaceholder}</a></strong></p>
\n\n`
}
\n
${
  answers.email &&
  `## Contact\n
Feel free to reach out to me on my email:
${answers.email}
\n\n`
}
\n
${
  answers.repoTitle &&
  `## License\n
[![License](https://img.shields.io/static/v1?label=Licence&message=${answers.license}&color=blue)](https://opensource.org/license/${answers.license})
\n`
}
`;
}
module.exports = generateMarkdown;
