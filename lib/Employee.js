// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name , id , email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    retName() {
        return this.name;
    }
    retID() {
        return this.id
    }
    retEmail() {
        return this.email;
    }
    retEmployee() {
        return "Employee";
    }
}
module.exports = Employee;