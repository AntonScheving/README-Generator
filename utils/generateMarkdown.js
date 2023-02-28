// function to generate markdown for README
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
  `<p>Deployed website: <strong><a href="${answers.deployedWebsite}"></a></strong>
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
