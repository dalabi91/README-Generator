const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  //title
  {
    type: "input",
    name: "title",
    message: "What is the title of your README?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    },
  },
  //description
  {
    type: "input",
    name: "description",
    message: "Please provide a short description for your project.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  //installation
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instruction for your project:",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter installation instructions!");
        return false;
      }
    },
  },
  //usage
  {
    type: "input",
    name: "usage",
    message: "How can this project be used?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter usage instruction!");
        return false;
      }
    },
  },
  //license
  {
    type: "list",
    name: "licenses",
    message:
      "What licenses are needed to use this project? Check all that apply",
    choices: ["None", "Apache_2.0", "MIT", "Mozilla", "GPLv3", "BSD_3"],
  },
  //Contributing
  {
    type: "input",
    name: "contributing",
    message: "How can this project be contributed to?",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log("Provide contributing instruction!");
        return false;
      }
    },
  },
  //tests
  {
    type: "input",
    name: "tests",
    message: "How can this project be tested?",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please enter how to test this project!");
        return false;
      }
    },
  },
  //contact: email
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the email!");
        return false;
      }
    },
  },
  //contact: github
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the Github username!");
        return false;
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`generatedREADME.md`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log(`README file has been created.`)
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile(response.fileName, response);
  });
}

// function call to initialize program
init();
