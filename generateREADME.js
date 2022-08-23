function generateReadme(answers) {
    return `
<h1>${answers.projectTitle}</h1>

## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [GitHub](#githubUsername)
- [Email](#email)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
${answers.license} is the license applied for this application. 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## GitHub
Provided here (${answers.githubUsername}) is the creators GitHub.
## Email
Provided here (${answers.questions}) is the creators Email.`;
  }
  
  module.exports = generateReadme;