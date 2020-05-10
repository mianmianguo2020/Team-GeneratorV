// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");//this is constructor


class Engineer extends Employee {
    constructor (name, id, email,github) {
        super(name, id, email)
        this.github = "GitHubUser"
    }
    
    getRole() {
        return "Engineer"
    }

    getGithub() {
        return "GitHubUser"
    }

}

module.exports = Engineer;