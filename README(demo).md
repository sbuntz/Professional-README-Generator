# README Generator
  [![license](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)

  ## Description 
  As a part of every project it is essential to provide a quality README with information about the application; the purpose, usage, installation, license, contributors and how to ask the developer questions. This is a Node.js command-line application to generate a README.md file based on a users input about your project. 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation 
  Clone the entire repo to your local via `git clone`. Run `npm install` to install the npm package dependencies as specified in the `package.json`. To start the application running `node index.js` in the command line. Complete the prompts in your command line. Once completed your README file will be named generated and store in you directory.

  ## Usage 
  When `node index.js` is run the application uses the `inquirer` package to prompt the user in the command line with a series of questions about their GitHub and project. From there,  `fs.writeFile` is used to generates the markdown file.
  
  ## License 
  This project is license under MIT: https://opensource.org/licenses/MIT

  ## Contributors 
  

  ## Questions
  If you have any questions about this projects, please contact me directly at stbuntz@gmail.com. You can view more of my projects at https://github.com/sbuntz.
