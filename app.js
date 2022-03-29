// requires inquirer, path, and fs
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// write to ReadME file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// initialize the program and inquire for responses
function init() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "username",
                message: "Enter your username"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your email address"
            },
            {
                type: "input",
                name: "title",
                message: "What is the name of your project?"
            },
            {
                type: "input",
                name: "summary",
                message: "Briefly describe your project"
            },
            {
                type: "input",
                name: "isntall",
                message: "Please enter installation instructions"
            },
            {
                type: "input",
                name: "usage",
                message: "Please enter info regarding usage"
            },
            {
                type: "input",
                name: "contribution",
                message: "Please enter contribution guidelines"
            },
            {
                type: "input",
                name: "testing",
                message: "Please enter test instructions"
            },
            
            //license will need to be a checkbox
            {
                type: "checkbox",
                name: "license",
                message: "License Options",
                choices: [
                    "None",
                    "Apache 2.0",
                    "Boost Software 1.0",
                    "Creative Commons Zero v1.0 Universal",
                    "Eclipse Public 2.0",
                    "GNU Affero General Public v3.0",
                    "GNU General Public v2.0",
                    "GNU Lesser General Public v2.1",
                    "GNU Public v3.0",
                    "MIT",
                    "Mozilla Public 2.0",
                    "the Unilicense"
                ]
            }

        ]).then(function(data) {
            console.log("Generating Markdown now, please wait a moment."); //lets user know input is finished and file generation has begun
            writeToFile("README.md", generateMarkdown({...data})); //actually begins file generation
        });
}
 
//initialize program
init()