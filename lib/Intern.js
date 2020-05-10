const Employee = require("../lib/Employee");//this is constructor
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (name, id, email,school) {
        super (name, id, email)
        this.school = "UCLA"

    }

getRole(){
    return  "Intern"
}

getSchool(){
    return "UCLA"
}

}

module.exports = Intern;
