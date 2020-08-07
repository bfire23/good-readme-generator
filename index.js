const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "what is the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Please decrible your project?",
    name: "description",

  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",

  },

  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",

  },
  {
    type: "input",
    message: "Who has contributed to this project?",
    name: "contributions",

  },
  {
    type: "input",
    message: "How do you test this project?",
    name: "tests",

  },
  {
    type: "list",
    message: "choose a license",
    name: "license",
    choices: [
      "GNU GPLv3",
      "MIT",
      "Apache"
    ],

  },
  {
    type: "input",
    message: "Please enter your GitHub username.",
    name: "username",

  },
  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",

  }

];
inquirer.prompt(questions)
// console.log(questions)

  .then(function (response) {
    const myData = generateMarkdown(response);
    console.log(response);
    // console.log("myData: ", myData)

    writeToFile("README.md", myData);
    
  })
  
  
  
  // function to write README file
  function writeToFile(fileName, Data) {

    fs.writeFile("README.md", Data, (err) => {
      
    
      if (err) {
        return console.log(err);
      }
    
      console.log("Success!");
    
    });
    

}
// function to initialize program
function init() {

}

// function call to initialize program
init();
