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