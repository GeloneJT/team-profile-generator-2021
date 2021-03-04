const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const members = [];
// const idArray = [];

function menu() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the managers name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the managers Id?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid id.";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the managers email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the managers phone number?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid phone number.";
          },
        },
      ])
      .then((response) => {
        const manager = new Manager(
          response.managerName,
          response.managerId,
          response.managerEmail,
          response.officeNumber
        );
        members.push(manager);
        teamBuilder();
      });
  }
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineers name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineers Id?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid id.";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineers email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineers GitHub information?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid Github account.";
          },
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.engineerGithub
        );
        members.push(engineer);
        teamBuilder();
      });
  }
  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the interns name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the interns Id?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid id.";
          },
        },
        {
          type: "input",
          name: "internsEmail",
          message: "What is the interns email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "Where did the intern attend school?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid school.";
          },
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internsEmail,
          response.internSchool
        );
        members.push(intern);
        teamBuilder();
      });
  }
  function teamBuilder() {
    inquirer.prompt([
      {
        type: "checkbox",
        name: "teamMembers",
        choices: ["Manager", "Engineer", "Intern", "Finish"]
      }
    ]).then(response => {
        const role = response.teamMembers;
        if  (role == "Manager"){
            createManager();
        }else if (role == "Engineer") {
            createEngineer();
        }else if (role == "Intern") {
            createIntern();
        }else if (role == "Finish") {
            stackTeam();
        }
    });
  }
  teamBuilder();
}
function stackTeam() {
  fs.writeFileSync(outputPath, render(members), "utf-8");
}
menu();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
