//generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  [![license](https://img.shields.io/badge/license-${answers.license}-blue)](https://shields.io)

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
  [![License](https://opensource.org/licenses/${answers.license})]

  ## Contributing 
  ${answers.contributors}
  ## Tests
  ${answers.test}
  ## Questions
  If you have any questions about this projects, please contact me directly at ${answers.email}. You can view more of my projects at https://github.com/${answers.github}.
`;
}

module.exports = generateMarkdown;
