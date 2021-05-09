// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [
    inquirer
    .prompt([
      {
        type: '',
        message: '',
        name: '',
      },
      {
        type: '',
        message: '',
        name: '',
      },
      {
        type: '',
        message: '',
        name: '',
      },
      {
        type: '',
        message: '',
        name: '',
      },
      {
        type: '',
        message: '',
        name: '',
      },
      {
        type: '',
        message: '',
        name: '',
      },
      {
        type: '',
        message: '',
        name: '',
      },
    ])
    // TODO: Create a function to write README file
    .then((response) => {
        fs.writeFile ('index.html', 
        `${response.name}
         ${response.location} 
         ${response.profile} 
         ${response.languages} 
         ${response.communication}`,
         (err) =>
         err ? console.error(err) : console.log('Entry logged!')
    );
// ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
