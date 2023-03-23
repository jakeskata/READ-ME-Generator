// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const generateMarkDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    { type: "input", name: "title", message: "enter the title of your project" },
    { type: "input", name: "description", message: "enter the description of your project" },
    { type: "input", name: "installation", message: "enter the steps for installation" },
    { type: "input", name: "usage", message: "enter the usage of your project" },
    { type: "input", name: "test", message: "enter the tests for your project" },
    { type: "input", name: "contribution", message: "enter the contributors of your project" },
    { type: "input", name: "email", message: "What is your email?" },
    { type: "input", name: "github", message: "What is your github's username?" },
    { type: "list", name: "license", message: "select your license", choices: ["MIT", "Apache 2.0", "bsd"] }
];

// TODO: Create a function to write README file
 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        let readmestring = generateMarkDown(answers)
        fs.writeFileSync("readme.md",readmestring)

    })
}

// Function call to initialize app
init();
