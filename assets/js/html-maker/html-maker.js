/*  The contents of this file are useless on their own, but we will export them and use the functions 
here to generate our html */

//an array that we will need later in our code
var cardArray = [];

//This will generate the card for the manager. The name, id, email, and office number will all be filled in with values gotten from inquirer
const generateManager = function (manager) {
    return  `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

//Same as the manager one, this creates a card for the engineer. The details being filled in via inquirer
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

//Creates a card for the intern
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

//this function will get the data aquired from inquirer, assign it to the above functions and then push the resulting html into an array.
//this array will then be inserted into the main html.
htmlMaker = (data) => { //note that 'data' here is the data gotten from inquire, this wont apply until we export this file

    for (let i = 0; i < data.length; i++) {
        const employee = data[i]; //makes it so that whatever loop we are on is the employee we are making the card for
        const role = employee.getRole(); //gets the role from whatever employee we are talking about and assigns what is returned from the function to role. Note that getRole() is found in constructors

        //if the role of the employee is manager then make a variable called managerCard and assign it the value of the generateManager function with the employee details inputted in inquirer as the parameter
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            //then push the created card to the previously made array
            cardArray.push(managerCard);
        }

        //same as the manager one. If it's engineer then make a variable and assign it generateEngineer
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            //push the card to the array
            cardArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            cardArray.push(internCard);
        }
    }

    // Takes all the html card strings and joins them, ready to be put into our main html
    const employeeCards = cardArray.join('')

    //makes a variable and assigns it the value of a function that we will create below. The function will have our main html inside
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

//We make a function that will generate the main html of our page. We set the employee cards as a parameter as we are going to add it via ${}
const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
};

//Readies our file for export
module.exports = htmlMaker;