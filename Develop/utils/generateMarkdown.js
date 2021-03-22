// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, email, username }) {
  return `# ${title}  
  [![License: ${renderLicenseSection()}](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)

## Description
${description}

### Table of contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions


### Installation
##### To install necessary dependencies, run the following command:
  ${npmi}
    
### Usage

### License

### Contributing

### Tests

### Questions
##### If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${username}

`;
}

module.exports = generateMarkdown;
