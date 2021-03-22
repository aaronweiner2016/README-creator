// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT": return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"    
    case "GPLv2" : return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    case "Apache" : return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "GPLv3" : return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    case "BSD 3-clause" : return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT" : return"[MIT](https://opensource.org/licenses/MIT)"      
    case "GPLv2" : return "[GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    case "Apache" : return "[Apache](https://opensource.org/licenses/Apache-2.0)"
    case "GPLv3" : return "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
    case "BSD 3-clause" : return "[BSD 3-clause](https://opensource.org/licenses/BSD-3-Clause)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `### License
 This project is lecensed under the ${renderLicenseLink(license)} license.` : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ usage, contributions, title, npmi, npmTest, description, email, username, license }) {
  return `# ${title}  
  ${renderLicenseBadge(license)}


## Description
${description}

## Table of contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions


## Installation
### To install necessary dependencies, run the following command:
\`\`\`
  ${npmi}
\`\`\`

## Usage
${usage}

${renderLicenseSection(license)}

## Contributing
${contributions}

## Tests
\`\`\`
  ${npmTest}
\`\`\`

## Questions
### If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${username}

`;
}

module.exports = generateMarkdown;
