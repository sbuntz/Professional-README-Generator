# README.md Generator

[![license](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)
## Description 
  
As a part of every project it is essential to provide a quality README with information about the application; the purpose, usage, installation, license, contributors and how to ask the developer questions. 

This is a Node.js command-line application to generate a README.md file based on a users input about your project. For an example please view [`README(demo).md`](https://github.com/sbuntz/Professional-README-Generator/blob/main/README(demo).md) 


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
  

## Installation

To start generating your own dynamic README files  `git clone` this repo to your local.
Run `npm install` to install the npm package dependencies as specified in the `package.json`:

To start the application running `node index.js` in the command line.

Complete the prompts in your command line. 
Once completed your README file will be named generated and store in you directory.


## Usage 

![Gif demo of README-generator](readme-demo.gif)

When `node index.js` is run the application uses the `inquirer` package to prompt the user in the command line with a series of questions about their GitHub and project.

From there,  `fs.writeFile` is used to generates the markdown file.


## License

MIT License
