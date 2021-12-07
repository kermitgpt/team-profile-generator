const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];

const buildManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Manager's first name...",
        name: "name",
      },
      {
        type: "input",
        message: "Enter your ID number...",
        name: "idNum",
      },
      {
        type: "input",
        message: "Enter your email address...",
        name: "email",
      },
      {
        type: "input",
        message: "Enter office number...",
        name: "officeNum",
      },
    ])
    .then((response) => {
      console.log(response);
      let newManager = new Manager(
        response.name,
        response.idNum,
        response.email,
        response.officeNum
      );
      employees.push(newManager);
      addOrExit();
    });
};

buildManager();

const buildEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team member first name...",
        name: "name",
      },
      {
        type: "input",
        message: "Enter your ID number...",
        name: "idNum",
      },
      {
        type: "input",
        message: "Enter your email address...",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter GitHub username",
        name: "github",
      },
    ])
    .then((response) => {
      console.log(response);
      let newEngineer = new Engineer(
        response.name,
        response.idNum,
        response.email,
        response.github
      );
      employees.push(newEngineer);
      addOrExit();
    });
};

const buildIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team member first name...",
        name: "name",
      },
      {
        type: "input",
        message: "Enter your ID number...",
        name: "idNum",
      },
      {
        type: "input",
        message: "Enter your email address...",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter school you attend...",
        name: "school",
      },
    ])
    .then((response) => {
      console.log(response);
      let newIntern = new Intern(
        response.name,
        response.idNum,
        response.email,
        response.school
      );
      employees.push(newIntern);
      addOrExit();
    });
};

const addOrExit = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Create another team member or finish building team",
        choices: ["Engineer", "Intern", "Finish building team"],
        name: "managerChoice",
      },
    ])
    .then((response2) => {
      if (response2.managerChoice === "Intern") {
        buildIntern();
      }
      if (response2.managerChoice === "Engineer") {
        buildEngineer();
      }

      if (response2.managerChoice === "Finish building team") {
        console.log(employees);
        //TO-DO: Build writefile function
      }
    });
};

const createHTML = () => {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header class="bg-danger p-5">
      <p class="text-center text-white m-5 p-5 fs-1">My Team</p>
    </header>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    <script src="./index.js"></script>
  </body>
</html>`;
};

const renderManager = () => {
  employees.map((employee) => {
    return `Name: ${this.name}`;
  });
};

function renderManager(employee) {}
