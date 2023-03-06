const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

const questions = [
  {
    type: "list",
    name: "questions",
    message: "What would you like to do?",
    choices: [
      "view all employees",
      "view all roles",
      "view all departments",
      "add an employee",
      "add a role",
      "add a department",
      "update employee role",
    ],
  },
];

function startPrompt() {
  inquirer.prompt(questions).then((response) => {
    if (response.questions === "view all employees") {
      showEmployees();
    }
    if (response.questions === "view all roles") {
      showRoles();
    }
    if (response.questions === "view all departments") {
      showDepartments();
    }
    if (response.questions === "add an employee") {
      addEmployee();
    }
    if (response.questions === "add a role") {
      addRole();
    }
    if (response.questions === "add a department") {
      addDepartment();
    }
    if (response.questions === "update employee role") {
      updateEmployee();
    }
  });
}

startPrompt();

const showEmployees = () => {
  db.query(`SELECT * FROM employees`, (err, results) => {
    console.log("hello world");
    console.table(results);
    startPrompt();
  });
};
const showRoles = () => {
  db.query(`SELECT * FROM roles`, (err, results) => {
    console.log("hello world2");
    console.table(results);
    startPrompt();
  });
};

const showDepartments = () => {
  db.query(`SELECT * FROM departments`, (err, results) => {
    console.log("hello world3");
    console.table(results);
    startPrompt();
  });
};

const addEmployee = () => {};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newRole",
        message: "What role would you like to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?",
      },
    ])
    .then((response) => {
      db.query(`SELECT department_name, id FROM departments`, (err, res) => {
        if (err) throw err;
        let resCount = 0;
        let departmentArr = [];
        for (let i = resCount; i < res.length; i++) {
          let departmentList = {
            name: res[i].department_name,
            value: res[i].id,
          };
          resCount++;
          departmentArr.push(departmentList);
        }
        console.log(departmentArr);
        inquirer
          .prompt([
            {
              type: "list",
              name: "depList",
              message: "What department does this role belong to?",
              choices: departmentArr,
            },
          ])
          .then((depResponse) => {
            const roleName = response.newRole;
            const roleSalary = response.salary;
            const departmentName = depResponse.depList;
            db.query(
              `INSERT INTO roles (job_title, salary, department_id) VALUES (${roleName}, ${roleSalary}, ${departmentName});`,
              (err, res) => {
                if (err) throw err;
                startPrompt();
              }
            );
          });
        // console.log("new role added!");
      });
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newDepartment",
        message: "What department would you like to add?",
      },
    ])
    .then((response) => {
      const departmentName = response.newDepartment;
      db.query(
        `INSERT INTO departments (name) VALUES (?)`,
        departmentName,
        (err, res) => {
          if (err) throw err;
        }
      );
      console.log("new department added!");
      startPrompt();
    });
};
const updateEmployee = () => {};
