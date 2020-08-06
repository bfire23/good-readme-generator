const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "what is the title of your project?",
    name: "Title"
  },
  {
    type: "input",
    message: "Please decrible your project?",
    name: "Description",

  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "Installation",

  },
  
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "Usage",

  },
  {
    type: "input",
    message: "Who has contributed to this project?",
    name: "Contributions",

  },
  {
    type: "input",
    message: "How do you test this project?",
    name: "Tests",

  },
  {
    type: "list",
    message: "choose a license",
    name: "License",
    choices: [
      "GNU GPLv3",
      "MIT",
      "Apache"
    ],

  },
  {
    type: "input",
    message: "Please enter your GitHub username.",
    name: "Username",

  },
  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",

  }


];
inquirer.prompt(questions)

.then(function(response) {
   const myData = generateMarkdown(response)
   writeToFile("readme.md", myData)
  
  console.log(response);
})
// function to write README file
function writeToFile(fileName, data) {

  
}

// function to initialize program
function init() {

}
// function call to initialize program
init();
