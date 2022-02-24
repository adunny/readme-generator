// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide directions (if any) on how to install your app.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use your app.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license to use.',
            choices: ['Apache', 'MIT', 'GPLv2', 'GPLv3', 'BSD-3', 'BSD-2']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can people contribute to this project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your e-mail address.'
        }
    ])
}



promptUser()
.then(data => {
    const readme = 
    `
<h1 align="center">${data.title}</h1>

<p align="center">
    <img src="https://img.shields.io/badge/license-${data.license}-blue"/>
</p>

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 
${data.install}

## Usage
${data.usage}

## License
This project is covered under the ${data.license} license.
![badge](https://img.shields.io/badge/license-${data.license}-blue)

## Contributing
${data.contribute}

## Questions
Have any questions, comments, or concerns?
Check me out on GitHub: [${data.github}](https://github.com/${data.github})
Email me at: 


`
    fs.writeFile('README.md', readme, err => {
        if (err) {
            console.log(err)
        }
    })
})














// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions