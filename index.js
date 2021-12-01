const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
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
    message: "Enter your office number...",
    name: "officeNum",
  },
]);
