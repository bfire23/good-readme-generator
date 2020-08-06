// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description:
    ${data.description}
  
  ## Installation:
    ${data.installation}
  
    ## Usage:
    ${data.usage}
  
    ## Contributions:
    ${data.contributions}
  
    ## Tests:
    ${data.tests}
  
    ## License:
     ${data.license}
    
  ## Questions:
    Please visit my GitHub page for any questions about the project. 
    Here is the link:

    [GitHub profile](https://github.com/${data.username})

    If you have anymore questions, please email me at ${data.email}





`;
}

module.exports = generateMarkdown;
