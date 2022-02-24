function generateMarkdown(data) {
  return `
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
![badge](https://img.shields.io/badge/license-${data.license}-blue)
  
This project uses the ${data.license} license.
  
  
## Contributing
${data.contribute}
  
## Questions
Have any questions, comments, or concerns?
  
Check me out on GitHub: [${data.github}](https://github.com/${data.github})
  
Email me at: [${data.email}](${data.email})
`
}

module.exports = generateMarkdown;
