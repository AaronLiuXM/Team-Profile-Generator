const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];

// start app -> manager prompt -> engineer &/ intern prompt

const createTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select type of employee you would like to add",
        name: "employeePrompt",
        choices: ["Manager", "Engineer", "Intern", "Finish editing"],
      },
    ])
    .then(function (userInput) {
      switch (userInput.employeePrompt) {
        case "Manager":
          addManager();
          break;

        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;
      }
    });
};

//manager name, id, email, office#
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter manager's name",
      },

      {
        type: "input",
        name: "managerId",
        message: "Please enter manager's ID",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter manager's email",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter manager's office number",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamArray.push(manager);
      createTeam();
    });
}

// Engineer name, id, email, email
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter engineer's name",
      },

      {
        type: "input",
        name: "engineerId",
        message: "Please enter engineer's ID",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter engineer's email",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter engineer's GitHub",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamArray.push(engineer);
      createTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter intern's name",
      },

      {
        type: "input",
        name: "internId",
        message: "Please enter intern's ID",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Please enter intern's email",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Please enter intern's school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamArray.push(intern);
      createTeam();
    });
}

createTeam();
