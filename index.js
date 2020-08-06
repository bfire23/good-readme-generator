const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

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
        message: "choose a license",
        Choices: [
            "GNU GPLv3",
             "MIT",
              "Apache"
        ],
        name: "License",
        
      },
      // {
      //   type: "input",
      //   message: "Please use table of contents.",
      //   Choices: [
      //     "Description",
      //     "Installation",
      //     "Usage",
      //     "Contributions",
      //     "tests"
      //   ]
        
      // },
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

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}   
    // function call to initialize program
    init();
