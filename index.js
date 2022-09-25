const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const pageLayout = require("./src/card-layout");
const addEngineerCard = require("./src/engineer-card");
const addManagerCard = require("./src/manager-card");
const addInterCard = require("./src/intern-card");

const teamArray = [];

// start app -> manager prompt -> engineer &/ intern prompt
