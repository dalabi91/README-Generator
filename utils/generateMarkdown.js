// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#test)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  This product is covered by the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Should you have any question regarding this project, feel free to contact me:

  ${data.email}
  [Github Account](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
