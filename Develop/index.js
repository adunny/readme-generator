// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/generate-readme.js')

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
    return generateMarkdown(data);
}).then(markdown => {
    return writeFile(markdown);
}).then(writeResponse => {
    console.log(writeResponse.message)
})
