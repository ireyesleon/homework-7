// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'Please write the contribution guidelines of your porject:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please write how to test your Project:',
    },
    {
      type: 'list',
      message: 'Please select the license for your README file:',
      name: 'license',
      choices: ['ISC', 'Apache', 'MIT', 'GNU General v2', 'GNU General v3', 'GNU Affero', 'GNU Lesser General v2.1', 'BSD-2', 'BSD-3', 'Boost Software', 'Creative Commons Zero', 'Eclipse', ''],
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
    fs.writeFile(`README1.md`, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

function generateMarkdown(data) {
    return `# ${data.title}
  * [Description](#descritpion)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [License](#license)
  * [Questions](#questions)
  
  ## Descritpion
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## License
  ${data.license}
  ## Questions
  Please feel free to reach
  GitHub: https://github.com/${data.github}
  Email: ${data.email}
  `;
  }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
