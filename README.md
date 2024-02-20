<div align="center">

# README-Generator

</div>

## Description

Has a developer it is important to have a high-quality README for a project/application. In this project, I have created a quick and easy way to create a README using a command line application to generate one by following a few question prompts in the command line. This is to save time and productivity. This application with allow developers/ project creators to focus more time on working on the actual project.

Check out this [**demo video**](https://watch.screencastify.com/v/1RvIdF6xMULPb53ZiHzI) for visual instruction on usage

[https://drive.google.com/open?id=1sNYA5YKhCqttrKqfAqJYAAIw1JG5mzuJ&usp=drive_copy](https://github.com/dalabi91/README-Generator/assets/152018805/66720141-b627-4548-9811-e07fdb3bec3f)

## User Story

- As a developer, I want a README generator so that I can quickly create a professional README for a new project.

## Acceptance criteria

- Create a command-line application that accepts user input.
  - When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    - The title of my project
    - Sections entitled:
      - Description
      - Table of Contents
      - Installation
      - Usage
      - License
      - Contributing
      - Tests
      - Questions
    - When a user enters the project title then it is displayed as the title of the README
    - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    - When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README


## Installation

- To start with, check if you have Node.js installed on your system by typing [node -v] in the command line.
- If Node.js is not installed, visit the [Node.js website](https://nodejs.org/en) to install.
- Next, clone this project repository to your computer
- Then, to install dependencies type [npm install] in the command line.

## Usage

- make sure you are in the right folder in your terminal
- This application can be invoked by typing [node index.js] in the command line

Check out this [**demo video**](https://watch.screencastify.com/v/1RvIdF6xMULPb53ZiHzI) for visual instruction on usage

### Screenshot of App function

<div align="center">

Terminal screenshot

![](./Images/Project-terminal%20screen.png)

</div>

## Resource

- [**W3 School Node.js**](https://www.w3schools.com/nodejs/nodejs_intro.asp)
- [**Bootcamp teaching material**](https://docs.google.com/presentation/d/1nLXKMKGO1ijl8CdjQ7iWlHbmq8TCgtjIxPFO8bvs62Y/edit#slide=id.gd52700b11d_9_1148)

<div align="center">

## License

Please refer to the license in the repo.

## Badges

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
![VS Code](https://img.shields.io/badge/Made%20with-VSCode-1f425f.svg)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)

</div>
