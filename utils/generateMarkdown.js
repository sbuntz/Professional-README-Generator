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
  * [Questions](#questions)
  
  ## Installation 
  ${answers.installation}

  ## Usage 
  ${answers.usage}
  
  ## License 
  This project is license under ${answers.license}: https://opensource.org/licenses/${answers.license}

  ## Contributors 
  ${answers.contributors}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${answers.email}. You can view more of my projects at https://github.com/${answers.username}.
`;
}

module.exports = generateMarkdown;
