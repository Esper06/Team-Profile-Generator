//Imports our constructor code in the file "base"
const Employee = require('./base');

// Extends the constructor Employee and allows us to use its values in our new constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        //Calls the values in the parent constructor "Employee"
        super (name, id, email);

        //sets whatever is inputted as officeNumber to be the value of officeNumber
        this.officeNumber = officeNumber;
    }

    // Overwrites the placeholder in role to be "Manager"
    getRole () {
        return "Manager";
    }
};

//allows us to export the file
module.exports = Manager;

