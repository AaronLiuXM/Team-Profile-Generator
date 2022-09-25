const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const pageLayout = require("./src/card-layout");
const addEngineerCard = require("./src/engineer-card");
const addManagerCard = require("./src/manager-card");
const addInternCard = require("./src/intern-card");

const teamArr = [];

// start app -> manager prompt -> engineer &/ intern prompt
const addManager = [
  {
    name: "name",
    type: "input",
    message: "Please enter the name of the manager:",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the EMP ID of the manager:",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the email address of the manager:",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "Please enter the office number of the manager:",
  },
  {
    name: "next",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "Complete Editing"],
    message: "Please select one of the options",
  },
];

const addEngineer = [
  {
    name: "name",
    type: "input",
    message: "Please enter the name of the engineer:",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the EMP ID of the engineer:",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the email address of the engineer:",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter the engineer's Github username:",
  },
  {
    name: "next",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "Complete Editing"],
    message: "Please select one of the options",
  },
];

const addIntern = [
  {
    name: "name",
    type: "input",
    message: "Please enter the name of the intern:",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the EMP ID of the intern:",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the email address of the intern:",
  },
  {
    name: "school",
    type: "input",
    message: "Please enter the name of the College:",
  },
  {
    name: "next",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "Complete Editing"],
    message: "Please select one of the options",
  },
];

runApp(addManager);

function runApp(questionArr) {
  inquirer
    .prompt(questionArr)
    .then((member) => {
      teamArr.push(member);

      if (member.next === "Add Engineer") {
        runApp(addEngineer);
      } else if (member.next === "Add Intern") {
        runApp(addIntern);
      } else {
        createProfiles(teamArr);
      }
    })
    .catch((err) => console.log(err));
}

function createProfiles(teamArr) {
  const profiles = teamArr.map((member) => {
    const { name, id, email } = member;

    if (member.hasOwnProperty("officeNumber")) {
      const { officeNumber } = member;
      return new Manager(name, id, email, officeNumber);
    }

    if (member.hasOwnProperty("github")) {
      const { github } = member;
      return new Engineer(name, id, email, github);
    }

    if (member.hasOwnProperty("school")) {
      const { school } = member;
      return new Intern(name, id, email, school);
    }
  });

  generateHtml(profiles);
}

function generateHtml(profiles) {
  let profileCards = "";
  profiles.forEach((profile) => {
    if (profile instanceof Manager) {
      const card = addManagerCard(profile);
      profileCards += card;
    } else if (profile instanceof Engineer) {
      const card = addEngineerCard(profile);
      profileCards += card;
    } else if (profile instanceof Intern) {
      const card = addInternCard(profile);
      profileCards += card;
    }
  });

  const newHtml = pageLayout(profileCards);

  writeHtml(newHtml);
}

function writeHtml(newHtml) {
  fs.writeFile("./dist/team-profile.html", newHtml, (err) => {
    if (err) throw err;
    console.log("HTML document successfully created in the /dist folder.");
  });
}
