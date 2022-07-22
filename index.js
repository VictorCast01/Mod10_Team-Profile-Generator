const fs = require('fs');
const inquirer = require('inquirer');
//const { inherits } = require('util');
const generateHTML = ({ managerName, managerID, mail1, officeNum, engineerName1, engID1, engEM1, gitHub1, engineerName2, engID2, engEM2, gitHub2, engineerName3, engID3, engEM3, gitHub3, internName, internID, internEM, internSchool }) =>
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
          <header>Manager ☕: ${managerName} </header>
          <div class="row row-cols-2 row-cols-lg-3">
            <div class="col">ID Number: ${managerID} </div>
            <div class="col">E-Mail: ${mail1} </div>
            <div class="col">Office Number: ${officeNum} </div>
          </div>
          <p></p>
        </section>
        <section class="card">
          <header>Engineer 👓: ${engineerName1} </header>
          <div class="row row-cols-2 row-cols-lg-3">
            <div class="col">ID Number: ${engID1} </div>
            <div class="col">E-Mail: ${engEM1} </div>
            <div class="col">GitHub: ${gitHub1} </div>
          <p></p>
        </section>
        <section class="card">
          <header>Engineer 👓: ${engineerName2} </header>
          <div class="row row-cols-2 row-cols-lg-3">
            <div class="col">ID Number: ${engID2} </div>
            <div class="col">E-Mail: ${engEM2} </div>
            <div class="col">GitHub: ${gitHub2} </div>
          <p></p>
        </section>
        <section class="card">
            <header>Engineer 👓: ${engineerName3} </header>
            <div class="row row-cols-2 row-cols-lg-3">
                <div class="col">ID Number: ${engID3} </div>
                <div class="col">E-Mail: ${engEM3} </div>
                <div class="col">GitHub: ${gitHub3} </div>
            <p></p>
          </section>
        <section class="card">
          <header>Intern 🎓: ${internName}</header>
          <div class="row row-cols-2 row-cols-lg-3">
            <div class="col">ID Number: ${internID} </div>
            <div class="col">E-Mail: ${internEM} </div>
            <div class="col">School: ${internSchool} </div>
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
        name: 'mail1',
    },
    {
        type: 'input',
        message: 'What is the Office Number?',
        name: 'officeNum',
    },
    {
      type: 'input',
      message: 'What is the name of your first engineer?',
      name: 'engineerName1',
    },
    {
      type: 'input',
      message: 'What is the ID number for your first engineer?',
      name: 'engID1',
    },
    {
      type: 'input',
      message: 'What is the E-mail of the first engineer?',
      name: 'engEM1',
    },
    {
      type: 'input',
      message: 'What is the GitHub of your first engineer?',
      name: 'gitHub1',
    },
    {
      type: 'input',
      message: 'What is the name of your second engineer?',
      name: 'engineerName2',
    },
    {
      type: 'input',
      message: 'What is the ID number for your second engineer?',
      name: 'engID2',
    },
    {
      type: 'input',
      message: 'What is the E-mail of the second engineer?',
      name: 'engEM2',
    },
    {
      type: 'input',
      message: 'What is the github of your second engineer?',
      name: 'gitHub2',
    },
    {
      type: 'input',
      message: 'What is the name of your third engineer?',
      name: 'engineerName3',
    },
    {
      type: 'input',
      message: 'What is the ID number for your third engineer?',
      name: 'engID3',
    },
    {
      type: 'input',
      message: 'What is the E-mail of the third engineer?',
      name: 'engEM3',
    },
    {
      type: 'input',
      message: 'What is the github of your third engineer?',
      name: 'gitHub3',
    },
    {
      type: 'input',
      message: 'What is the name of your intern?',
      name: 'internName',
    },
    {
      type: 'input',
      message: 'What is the ID number for your intern?',
      name: 'internID',
    },
    {
      type: 'input',
      message: 'What is the E-mail of the intern?',
      name: 'internEM',
    },
    {
      type: 'input',
      message: 'What school is your intern studying at?',
      name: 'internSchool',
    },


]).then((answers) => {
    const htmlPageContent = generateHTML(answers);
fs.writeFile("index.html",
generateHTML(answers),
(err) => err ? console.log(err) :console.log('Success!')
);
});