const fs = require('fs');
const inquirer = require('inquirer');
//const { inherits } = require('util');
const generateHTML = ({ managerName, managerID, managerEMail, managerOffice, GitHub }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Coding Team</title>
    <link rel="stylesheet" href="./assets/css/style.css" />
</head>
<header>
    <h1>My Team</h1>
</header>
<body>
    <div class="roles">
        <section class="card">
          <header>Manager ☕: ${managerName}</header>
          <div class="row row-cols-2 row-cols-lg-3">
            <div class="col">ID Number: ${managerID}</div>
            <div class="col">E-Mail: ${managerEMail}</div>
            <div class="col">Office Number: ${managerOffice}</div>
          </div>
          <p></p>
        </section>
        <section class="card">
          <header>Engineer 👓: </header>
          <div class="row row-cols-2 row-cols-lg-3">
            <div class="col">ID Number: </div>
            <div class="col">E-Mail: </div>
            <div class="col">GitHub: </div>
          <p></p>
        </section>
        <section class="card">
          <header>Engineer 👓: </header>
          <div class="row row-cols-2 row-cols-lg-3">
            <div class="col">ID Number: </div>
            <div class="col">E-Mail: </div>
            <div class="col">GitHub: </div>
          <p></p>
        </section>
        <section class="card">
            <header>Engineer 👓: </header>
            <div class="row row-cols-2 row-cols-lg-3">
                <div class="col">ID Number: </div>
                <div class="col">E-Mail: </div>
                <div class="col">GitHub: </div>
            <p></p>
          </section>
        <section class="card">
          <header>Intern 🎓:</header>
          <div class="row row-cols-2 row-cols-lg-3">
            <div class="col">ID Number: </div>
            <div class="col">E-Mail: </div>
            <div class="col">School: </div>
          <p></p>
        </section>
      </div>
</body>
</html>`
;

inquirer
.prompt([
    {
        type: 'input',
        message: 'First we must assign a manager, what is the name of the Manager?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is their ID Number?',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'What is the E-Mail to reach out to the manager?',
        name: 'E-Mail',
    },

    {
        type: 'input',
        message: 'What is the Office Number?',
        name: 'managerOffice',
    },
    {
        type: 'rawlist',
        message: 'Next we must assign four members to engineers or interns, who should the first member be?',
        choices: ('engineer', 'intern')
    },
    {
        type: 'input',
        message: 'What is their ID Number?',
        name: 'engineerID1',
    },
    {
        type: 'input',
        message: 'What is the E-Mail to reach out to this engineer?',
        name: 'engineerEMail1',
    },

    {
        type: 'input',
        message: 'What is the GitHub for this engineer?',
        name: 'engineerGitHub1',
    },
]).then((answers) => {
    const htmlPageContent = generateHTML(answers);

    if(DataTransfer.continue === "Add an Engineer")
fs.writeFile("index.html",
generateHTML(answers),
(err) => err ? console.log(err) :console.log('Success!')
);
});