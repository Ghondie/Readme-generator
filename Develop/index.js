// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const path = require("path")
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of this project?",
    },
    {
        type: "input",
        name: "description ",
        message: "Brief description of the project."
    },
    {
        type: "input",
        name: "table",
        message: "Table of contents of the project."
    },
    {
        type: "input",
        name: "instalation",
        message: "Instalation of the project."
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE", "GPL", "BSDDDDD", "None"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Aditional contributors."
    },
    {
        type: "confirm",
        name: "tests",
        message: "any test files"
    },

    {
        type: "input",
        name: "questions",
        message: "What questions did you have?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);

        writeToFile("GENERATEDREADME.md", generateMarkdown(data))
    })
}

// function call to initialize program
init();

