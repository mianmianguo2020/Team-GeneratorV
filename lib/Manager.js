// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");//this is constructor

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = 100

    }

    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber


    }
}
module.exports = Manager;
