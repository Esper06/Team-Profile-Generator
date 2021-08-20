//first we import the base constructor
const Employee = require("./base");

//We make our engineer constructor and make it connect to our base constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {

        //super allows us to use the values inputted into the parent constructor (base)
        super (name,id,email); //This means this constructor will have the same name,id, and email that was inputted into Employee
        
        //this gets whatever is inputted as their github account and assigns it to 'github'
        this.github = github;
    }


    //returns github when we call it
    getGithub () {
        return this.github;
    }

    //rewrites the placeholder that is in role and sets it as Engineer
    getRole () {
        return "Engineer";
    }

};

//readies the file for export
module.exports = Engineer;