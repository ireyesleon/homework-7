// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "") {
    return `[License](#license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `## License
    Project Licensed under ${license}`
  }
  return "";
}

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your Project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to install your Project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of your Project:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please write the contribution guidelines of your Project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please write how to test your Project:',
    },
    {
      type: 'list',
      message: 'Please select the license for your README file:',
      name: 'license',
      choices: ['ISC', 'Apache', 'MIT', ''],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub user:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:',
    }
  ])

// TODO: Create a function to write README file
.then((data) => {
    fs.writeFile(`README.md`, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Your README file was created successfully!')
    );
  });

function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  # Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any question please feel free to reach me:
  * [GitHub](https://github.com/${data.github})
  * Email: ${data.email}
  `;
  }
