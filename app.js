const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const memberTypeL = [
    "Manager",
    "Intern",
    "Engineer"
]


const questionList = [
    {
        type: 'list',
        name: 'memberType',
        message: 'Which type of team member you like to add?',
        choices: memberTypeL,
    },
]

const managerQ = [
    {
        message: "what is your manager's name",
        name: "name"
    },
    {
        message: "what's your nameger ID",
        name: "id"
    },
    {
        message: "what's your manager email",
        name: "email"
    },

    {
        message: "what's your manager's office number",
        name: "number"
    },
]


const InternQ = [
    {
        message: "what is your Intern's name",
        name: "name"
    },
    {
        message: "what's your Intern ID",
        name: "id"
    },
    {
        message: "what's your Intern email",
        name: "email"
    },

    {
        message: "what's your Intern's school",
        name: "school"
    },
]


const engineerQ = [
    {
        message: "what is your engineer's name",
        name: "name"
    },
    {
        message: "what's your engineer ID",
        name: "id"
    },
    {
        message: "what's your engineer email",
        name: "email"
    },

    {
        message: "what's your engineer's github username",
        name: "github"
    },
]

inquirer
    .prompt(managerQ).then(res => {
        inquirer
            .prompt(questionList).then(result => {
                const memberTypeChoise = result.choices
                if (memberTypeChoise = "Manager") {
                    inquirer
                        .prompt(questionList2)
                }
                else if (memberTypeChoise = "Intern") {
                    inquirer
                        .prompt(InternQ)

                }
                else {
                    inquirer
                        .prompt(engineerQ)
                }
            })

        }).then()




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```