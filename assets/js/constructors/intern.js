// First we import the base constructor
const Employee = require('./base');

// we connect the Intern constructor to the Employee one
class Intern extends Employee {
    constructor (name, id, email, school) {

        //this allows us to use values inputted into the base constructor (Employee) and use it in Intern
        super (name, id, email);

        //whatever is inputted as school is then assigned to school
        this.school = school;

    }

    //Allows to return the value of school when we call this function
    getSchool () {
        return this.school;
    }

    //Overwrites the placeholder text in role and turns it into "Intern"
    getRole () {
        return "Intern";
    }
};

// Allows us to export this file
module.exports = Intern;