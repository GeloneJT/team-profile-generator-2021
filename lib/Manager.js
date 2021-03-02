const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
require = ("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officePhone) {
        super (name, id, email);
        this.officePhone = officePhone;
    }
}
module.exports = Manager;