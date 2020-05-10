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
    "Engineer",
    "I don't want to add any"
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
        name: "id",
        validate: function validateId(id) {
            if (id <= 0) {
                return "Please enter a positve number"//data valication positive number and need to 
                //be a number 
            }

            return id > 0;
        }
    },
    {
        message: "what's your manager email",
        name: "email",
        validate: function validateEmail(email) {
            if (email.indexOf('@') == -1) {
                return "Please enter an email"//need to be email
            }

            return true;
        }
    },

    {
        message: "what's your manager's office number",
        name: "officeNumber"

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


userInput()

function createHtmlFile(mainContent) {

    if (fs.existsSync("./output")) {
        fs.writeFileSync("./output/team.html", mainContent)
    } else {
        fs.mkdirSync("./output")
        fs.writeFileSync("./output/team.html", mainContent)

    }
}


function userInput() {
employeeList = [];


    inquirer
        .prompt(managerQ).then(res => {

            const manager = new Manager(res.name, res.id, res.email, res.officeNumber)
            employeeList.push(manager)
            rollingQuestions(employeeList)
      

        })

}

function rollingQuestions(employeeList) {



    inquirer
        .prompt(questionList).then(async result => {

            const memberTypeChoise = result.memberType

            if (memberTypeChoise != "I don't want to add any") {

                if (memberTypeChoise == "Manager") {
                    await inquirer
                        .prompt(managerQ)
                        .then(result => {

                            const manager = new Manager(result.name, result.id, result.email, result.officeNumber)
                            employeeList.push(manager)

                        })



                }
                if (memberTypeChoise == "Intern") {
                    await inquirer
                        .prompt(InternQ)
                        .then(result => {

                            const intern = new Intern(result.name, result.id, result.email, result.school)
                            employeeList.push(intern)
                            // console.log(intern)

                        })


                }

                if (memberTypeChoise == "Engineer") {
                    await inquirer
                        .prompt(engineerQ)
                        .then(result => {

                            const engineer = new Engineer(result.name, result.id, result.email, result.github)
                            employeeList.push(engineer)
                            // console.log(engineer)

                        })

                }
                rollingQuestions(employeeList)
            }
            else {
                mainContent = render(employeeList)
                createHtmlFile(mainContent)
            }



        })

}

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
