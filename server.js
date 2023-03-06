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
    console.log("hello world");
    console.table(results);
    startPrompt();
  });
};

const showDepartments = async () => {
  db.query(`SELECT * FROM departments`, (err, results) => {
    console.log("hello world");
    console.table(results);
    startPrompt();
  });
};

const addEmployee = () => {};
const addRole = () => {};
const addDepartment = () => {};
const updateEmployee = () => {};
