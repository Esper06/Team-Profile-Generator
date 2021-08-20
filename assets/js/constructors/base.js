//This folder is for the foundation of all the other Employee cards. What we code here will be exported and built upon by other files to be more specific to their needs


//we make a constructor that sets the name, id, and email to be whatever is inputted. The input will be gotten via inquirer
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    //We make this function so that we can get the value of name by calling it. Same with the ones below 
    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    //This particular one will be changed depending on where it's called and why
    getRole () {
        return 'placeholder'
    }

};

//Lets us export the file
module.exports = Employee;