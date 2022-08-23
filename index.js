// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const createREADME = require("./generateREADME");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('README.md', fileName)
}

// TODO: Create an array of questions for user input
function questionUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: "projectTitle",
            message: "What is the name of the project?",
        },
        {
            type: 'input',
            name: "description",
            message: "Give a description of the project?",
        },
        {
            type: 'input',
            name: "motivation",
            message: "What is the motivation for this project?",
        },
        {
            type: 'input',
            name: "installation",
            message: "Describe if there is any installation processes.",
        },
        {
            type: 'input',
            name: "usage",
            message: "What is the use case for this project?",
        },
        {
            type: 'input',
            name: "license",
            message: "What license, if any, do you have for this project?",
            choices: ["MIT", "Apache", "Other"]
        },
        {
            type: 'input',
            name: "contributors",
            message: "Who are the contributors of this project?",
        },
        {
            type: 'input',
            name: "tests",
            message: "Are there inculded tests?",
        },
        {
            type: 'input',
            name: "githubUsername",
            message: "What is your github username?",
        },
        {
            type: 'input',
            name: "Email",
            message: "What is your email?",
        }
    ])
};

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    questionUser()
        .then((data) => {
            const fileName = createREADME(data)
            writeToFile(fileName, data)
                .then(() => console.log('Successfully created README.md'))

        })
        .catch((err) => 
            console.error(err))
}

// Function call to initialize app
init();


