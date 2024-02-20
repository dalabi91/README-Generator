// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

[Description] (#description)
[Installation] (#installation)
[Usage] (#usage)
[License] (#license)
[Contributing] (#contributing)
[Tests] (#test)
[Questions] (#test)

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

  ## Test
  ${data.test}

  ## Questions
  Should you have any question regarding this project, feel free to contact through email or visit my github account
  <a href="mailto:${data.email}">${data.email}</a>
  <a href="https://github.com/${data.github}">${data.github}</a>

`;
}

module.exports = generateMarkdown;
