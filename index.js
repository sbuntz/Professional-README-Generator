// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// const writeFileAsync = util.promisify(fs.writeFile);

// Read me Questions
function promptUser(){
  return inquirer.prompt([
      {
          type: "input",
          name: "username",
          message: "Please enter your GitHub username: ",
          validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('you must enter your Github username');
                return false; 
            }
        } 
    },
      {
          type: "input",
          name: "email",
          message: "Please enter your email: ",
          validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('you must enter your email address');
                return false; 
            }
        } 
    },
      {
          type: "input",
          name: "projectTitle",
          message: "What is the title of your repository?",
          validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('you must enter a title for your repository');
                return false; 
            }
        } 
      },
      {
          type: "input",
          name: "description",
          message: "Write a brief description of your project: "
      },
      {
          type: "input",
          name: "installation",
          message: "Describe the installation process if any: ",
      },
      {
        type: "input",
        name: "installation",
        message: "Please list installation instructions: "
        },
      {
          type: "input",
          name: "usage",
          message: "Please list instructions for usage: "
      },
      {
          type: "list",
          name: "license",
          message: "Chose the appropriate license for this project: ",
          choices: [
              "Apache",
              "MIT",
              "Mozilla"
          ]
      },
      {
          type: "input",
          name: "contributing",
          message: "Who are the contributors of this projects?"
      }
  ]);
} 
      

//function to write README file
// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
  // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README'))
    .catch((err) => console.error(err));
};

init();

// //function to initialize app
// async function init() {
//   try {

//       // Prompt Inquirer questions
//       const userResponses = await inquirer.prompt(questions);
//       console.log("Your responses: ", userResponses);
//       console.log("Thank you for your responses! Fetching your GitHub data next...");
  
//       // Call GitHub api for user info
//       const userInfo = await api.getUser(userResponses);
//       console.log("Your GitHub user info: ", userInfo);
  
//       // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
//       console.log("Generating your README...")
//       const markdown = generateMarkdown(userResponses, userInfo);
//       console.log(markdown);
  
//       // Write markdown to file
//       await writeFileAsync('README.md', markdown);

//   } catch (error) {
//       console.log(error);
//   }
// };

// // Function call to initialize app
// init();
