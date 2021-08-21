//We bring in our html maker functions
const htmlMaker = require('./html-maker/html-maker');

//We bring in our card constructors
const manager = require('./constructors/manager');
const engineer = require('./constructors/engineer');
const intern = require('./constructors/intern');

//We need this for inquirer to work
const fs = require('fs');

//We bring in inquirer
const inquirer = require('inquirer');
const InputPrompt = require('inquirer/lib/prompts/input');
const Manager = require('./constructors/manager');
const Employee = require('./constructors/base');

//an array we will be using later
const teamArray = [];

//This is all the manager prompts that the user will be asked
const addManager = () => {
    return inquirer.prompt ([
        {
            type:'input',
            name: 'name',
            message: 'What is the name of your manager?'
        },
        {
            type:'input',
            name:'id',
            message:"What is your manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?"
        },
        {
            type:'input',
            name:'officeNumber',
            message: "What is the office number of your manager?"
        }
    ])
    .then(managerInput => { //the inputted data is then used in the constructor to make our new manager card
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        //finally the completed data is pushed into an array
        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type:'list',
            name:'role',
            message:"Please select the type of employee you would like to add",
            choices: ['Engineer', 'Intern']
        },
        {
            type:'input',
            name:'name',
            message:"What is the employee's name?"
        },
        {
            type:'input',
            name:'id',
            message:"Please enter the employee's ID"
        },
        {
            type: 'input',
            name:'email',
            message:"Please enter the employee's email"
        },
        {
            type:'input',
            name:'github',
            message:"Please enter the employee's github username",
            when: (input) => input.role === "Engineer" //This makes it so that this question is only asked if the employee has the role engineer 
        },
        {
            type: 'input',
            name:'school',
            message:"Please enter the intern's school",
            when: (input) => input.role === "Intern" //This makes it so that this question is only asked if the employee has the role intern
        },
        {
            type:'confirm',
            name:'confirmAddEmployee',
            message:"Would you like to add more employees?",
            default: false
        }
    ])
    .then(employeeData => {
        //this takes the data from the prompt and assigns it to a variable called employeeData
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee; //we make this variable for future use
        
        if (role === "Engineer") {  //if the role is engineer then they get the engineer data assigned to it
            employee = new Engineer (name, id, email, github)

            console.log(employee);

        } else if (role === "Intern") { //likewise if they're an intern then they get the intern data assigned to it
            employee = new Intern (name, id, email, school);

            console.log(employee)
        }

        teamArray.push(employee); //we then push the data to the teamArray we made earlier

        if (confirmAddEmployee) { //if they answered yes to adding another employee then the prompt function as ran again
            return addEmployee(teamArray);
        } else {
            return teamArray; //if not then it returns the array with all the data in
        }
    })
};

