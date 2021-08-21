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