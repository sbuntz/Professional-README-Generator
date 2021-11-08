// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description 
  ${answers.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${answers.install}
  ## Usage 
  ${answers.usage}
  ## License 
  This project is license under ${answers.license}
  ## Contributing 
  ${answers.contributors}
  ## Tests
  ${answers.test}
  ## Questions
  If you have any questions about this projects, please contact me directly at ${answers.email}. You can view more of my projects at https://github.com/${answers.github}.
`;
}

module.exports = generateMarkdown;
